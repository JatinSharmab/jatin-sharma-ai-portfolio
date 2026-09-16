import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { portfolioData } from '../src/data/portfolioData.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
let checkCount = 0

function check(condition, message) {
  if (!condition) throw new Error(`Validation failed: ${message}`)
  checkCount += 1
}

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), 'utf8')
}

function collectFiles(relativeDirectory) {
  const directory = path.join(projectRoot, relativeDirectory)
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name)
    return entry.isDirectory() ? collectFiles(relativePath) : [relativePath]
  })
}

const { metadata, personal, navigation, socialLinks, projects, contact } = portfolioData
const indexHtml = read('index.html')
const sourceFiles = collectFiles('src').filter((file) => /\.(?:css|js|jsx)$/.test(file))

// 1. Metadata and Title Checks
check(metadata.title === 'Jatin Sharma | AI Engineer', 'the approved page title changed')
check(metadata.description.length >= 80, 'the metadata description is unexpectedly short')
check(indexHtml.includes(`<title>${metadata.title}</title>`), 'index.html title differs from portfolio data')
check(indexHtml.includes('rel="canonical"'), 'index.html must include canonical URL')
check(indexHtml.includes('<html lang="en">'), 'the document language must be English')

// 2. Schema.org JSON-LD Person structured data
const jsonLdMatch = indexHtml.match(
  /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
)
check(Boolean(jsonLdMatch), 'Person structured data is missing')
const jsonLd = JSON.parse(jsonLdMatch[1])
check(jsonLd['@type'] === 'Person' && jsonLd.name === personal.name, 'Person structured data is invalid')
check(jsonLd.jobTitle === 'AI Engineer', 'Person jobTitle must be AI Engineer')
check(
  Array.isArray(jsonLd.sameAs) && jsonLd.sameAs.length === 2,
  'structured social profiles must contain the two verified profiles',
)

// 3. Public Assets and Resume
const publicAssets = [personal.resumePath.slice(1), 'favicon.svg', 'robots.txt']
for (const asset of publicAssets) {
  const assetPath = path.join(projectRoot, 'public', asset)
  check(fs.existsSync(assetPath) && fs.statSync(assetPath).size > 0, `${asset} is missing or empty`)
}
const resumeBytes = fs.readFileSync(path.join(projectRoot, 'public', personal.resumePath.slice(1)))
check(resumeBytes.subarray(0, 4).toString('ascii') === '%PDF', 'the resume asset is not a PDF')
check(read('public/favicon.svg').includes('<svg'), 'the favicon asset is not SVG')
check(/User-agent:\s*\*/i.test(read('public/robots.txt')), 'robots.txt has no default user agent')

// 4. Vercel deployment rewrites
check(fs.existsSync(path.join(projectRoot, 'vercel.json')), 'vercel.json rewrite configuration is missing')

// 5. Navigation & Social Profiles
check(navigation.length === 4, 'the primary navigation must contain the 4 main routes: /, /about, /projects, /contact')
const github = socialLinks.find(({ platform }) => platform === 'github')
const linkedin = socialLinks.find(({ platform }) => platform === 'linkedin')
const email = socialLinks.find(({ platform }) => platform === 'email')
check(github?.href === 'https://github.com/JatinSharmab', 'the verified GitHub URL changed')
check(
  linkedin?.href === 'https://linkedin.com/in/jatin-sharma-35b64021a',
  'the verified LinkedIn URL changed',
)
check(email?.href === `mailto:${personal.email}`, 'the verified email URL changed')
check(contact.email === personal.email, 'contact email is not sourced from personal data')

// 6. The Four Primary AI Projects
check(projects.length === 4, 'the portfolio must feature exactly four primary AI projects')
check(projects[0].slug === 'synapse', 'project 1 must be Synapse')
check(projects[1].slug === 'cinerank-ai', 'project 2 must be CineRank AI')
check(projects[2].slug === 'nexus-ai', 'project 3 must be NexusAI')
check(projects[3].slug === 'finsight-ai', 'project 4 must be FinSight AI')

check(projects[0].githubUrl === 'https://github.com/JatinSharmab/synapse-ai', 'Synapse GitHub repository URL changed')
check(projects[1].githubUrl === 'https://github.com/JatinSharmab/CineRank-AI', 'CineRank AI GitHub repository URL changed')
check(projects[2].githubUrl === 'https://github.com/JatinSharmab/nexus-ai', 'NexusAI GitHub repository URL changed')
check(projects[3].githubUrl === 'https://github.com/JatinSharmab/finsight-at', 'FinSight AI GitHub repository URL changed')

for (const project of projects) {
  check(Array.isArray(project.implementedCapabilities) && project.implementedCapabilities.length > 0, `${project.title} missing implemented capabilities`)
  check(Array.isArray(project.plannedImprovements) && project.plannedImprovements.length > 0, `${project.title} missing planned improvements`)
  check(Array.isArray(project.architecture) && project.architecture.length >= 5, `${project.title} architecture stages incomplete`)
}

// Check CineRank AI benchmark data exists
check(Array.isArray(projects[1].benchmarks) && projects[1].benchmarks.length >= 5, 'CineRank AI must include empirical benchmark metrics')

// 7. Career, Skills, and Credentials
check(portfolioData.experience.length === 2, 'the approved experience history changed')
check(portfolioData.skillGroups.length === 5, 'the approved skill groups count changed')
check(portfolioData.achievements.length === 2, 'the approved achievements changed')
check(personal.resumePath === '/assets/Jatin-Sharma-Resume.pdf', 'resume path must be /assets/Jatin-Sharma-Resume.pdf')

// 8. Text Encoding Validation
const malformedText = ['\uFFFD', 'Â·', 'Â©', 'â€™', 'â€œ', 'â€\u009d']
for (const file of [...sourceFiles, 'index.html', 'README.md']) {
  const content = read(file)
  check(
    malformedText.every((sequence) => !content.includes(sequence)),
    `${file} contains a likely text-encoding error`,
  )
}

console.log(`Portfolio validation passed (${checkCount} checks).`)
console.log('Verified 4 Primary AI Projects:')
projects.forEach((p, i) => console.log(`  0${i+1}. ${p.title} (${p.githubUrl})`))

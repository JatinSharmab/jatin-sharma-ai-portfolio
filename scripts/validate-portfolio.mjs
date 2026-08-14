import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { portfolioData, portfolioTodos } from '../src/data/portfolioData.js'

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

const { metadata, personal, navigation, socialLinks, featuredProject, contact } = portfolioData
const indexHtml = read('index.html')
const sourceFiles = collectFiles('src').filter((file) => /\.(?:css|js|jsx)$/.test(file))
const sourceText = sourceFiles.map((file) => read(file)).join('\n')

check(metadata.title === 'Jatin Sharma | AI/ML Engineer', 'the approved page title changed')
check(metadata.description.length >= 120, 'the metadata description is unexpectedly short')
check(indexHtml.includes(`<title>${metadata.title}</title>`), 'index.html title differs from portfolio data')
check(
  indexHtml.includes(`name="description"\n      content="${metadata.description}"`),
  'index.html description differs from portfolio data',
)
check(indexHtml.includes('<html lang="en">'), 'the document language must be English')

const jsonLdMatch = indexHtml.match(
  /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
)
check(Boolean(jsonLdMatch), 'Person structured data is missing')
const jsonLd = JSON.parse(jsonLdMatch[1])
check(jsonLd['@type'] === 'Person' && jsonLd.name === personal.name, 'Person structured data is invalid')
check(
  Array.isArray(jsonLd.sameAs) && jsonLd.sameAs.length === 2,
  'structured social profiles must contain the two verified profiles',
)

const publicAssets = [personal.resumePath.slice(1), 'favicon.svg', 'robots.txt']
for (const asset of publicAssets) {
  const assetPath = path.join(projectRoot, 'public', asset)
  check(fs.existsSync(assetPath) && fs.statSync(assetPath).size > 0, `${asset} is missing or empty`)
}
const resumeBytes = fs.readFileSync(path.join(projectRoot, 'public', personal.resumePath.slice(1)))
check(resumeBytes.subarray(0, 4).toString('ascii') === '%PDF', 'the resume asset is not a PDF')
check(read('public/favicon.svg').includes('<svg'), 'the favicon asset is not SVG')
check(/User-agent:\s*\*/i.test(read('public/robots.txt')), 'robots.txt has no default user agent')
check(/Allow:\s*\//i.test(read('public/robots.txt')), 'robots.txt does not allow the portfolio to be crawled')

check(navigation.length === 6, 'the primary navigation must contain six approved destinations')
check(new Set(navigation.map(({ href }) => href)).size === navigation.length, 'navigation targets are duplicated')
const declaredIds = new Set([...sourceText.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]))
for (const { href } of navigation) {
  check(href.startsWith('#') && declaredIds.has(href.slice(1)), `navigation target ${href} is missing`)
}
check(declaredIds.has('main-content'), 'the skip-link target is missing')

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
check(contact.fallbackHref === `mailto:${personal.email}`, 'the form fallback is not the verified email')

check(portfolioData.experience.length === 2, 'the approved experience history changed')
check(portfolioData.highlights.length === 4, 'the credibility highlights changed')
check(featuredProject.architecture.length === 6, 'the featured architecture must have six stages')
check(portfolioData.skillGroups.length === 7, 'the approved skill groups changed')
check(portfolioData.achievements.length === 2, 'the approved achievements changed')

check(metadata.canonicalUrl === null, 'publish a canonical URL only after it is verified')
check(metadata.openGraphImage === null, 'publish an Open Graph image only after it exists')
check(portfolioData.hero.availability === null, 'publish availability only after its wording is verified')
check(featuredProject.githubUrl === null, 'publish the project repository only after it is verified')
check(featuredProject.demoUrl === null, 'publish a project demo only after it is verified')
check(portfolioData.additionalProjects.length === 0, 'additional projects require verified source material')
check(contact.formEndpoint === null, 'the contact endpoint must be verified before it is enabled')
check(
  Object.values(portfolioTodos).every((todo) => todo.startsWith('TODO:')),
  'all unresolved data must remain clearly marked',
)

const malformedText = ['\uFFFD', 'Â·', 'Â©', 'â€™', 'â€œ', 'â€\u009d']
for (const file of [...sourceFiles, 'index.html', 'README.md']) {
  const content = read(file)
  check(
    malformedText.every((sequence) => !content.includes(sequence)),
    `${file} contains a likely text-encoding error`,
  )
}

console.log(`Portfolio validation passed (${checkCount} checks).`)
console.log('Expected unpublished values:')
for (const todo of Object.values(portfolioTodos)) console.log(`- ${todo.replace(/^TODO:\s*/, '')}`)

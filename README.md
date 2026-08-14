# Jatin Sharma — AI/ML Engineer Portfolio

A production-oriented, single-page portfolio for Jatin Sharma, positioned around applied machine learning, Generative AI, backend systems, big-data processing, and cloud delivery. The site includes a resume-derived experience timeline, a featured recommendation-platform case study, grouped capabilities, education and achievements, and an accessible contact flow.

## Stack

- React 19 and Vite 8
- Tailwind CSS 4 through the official Vite plugin
- Framer Motion with lazy-loaded motion features
- React Icons
- Self-hosted Manrope variable font

Animate.css remains installed for compatibility with the original project setup, but the production interface does not import it.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Local development

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. Stop the server with `Ctrl+C`.

## Validation and production build

Run the complete repository validation and production build:

```bash
npm run validate
```

The validation script checks the centralized portfolio data, navigation targets, metadata, structured data, required public assets, verified contact links, expected placeholder state, and common text-encoding errors. It then runs the Vite production build.

The build can also be run independently:

```bash
npm run build
npm run preview
```

The generated production files are written to `dist/`.

## Project structure

```text
public/                         Resume, favicon, and robots.txt
scripts/validate-portfolio.mjs Final data and asset validation
src/components/layout/         Application shell, navigation, and footer
src/components/motion/         Ambient motion layer
src/components/sections/       Portfolio page sections
src/components/ui/             Reusable interface components
src/data/portfolioData.js      Content, links, metadata, and placeholders
src/hooks/                     Active-section, count-up, and pointer hooks
src/styles/tokens.css          Design tokens
src/index.css                  Global and component styling
```

## Customizing portfolio content

Use `src/data/portfolioData.js` as the single source of truth. Update personal details, navigation, social links, experience, projects, skills, education, achievements, and contact copy there rather than hard-coding content inside components.

Keep unverified values set to `null` or an empty array and retain a corresponding entry in `portfolioTodos`. The UI intentionally hides unavailable links and does not present placeholders as facts.

To replace the resume, keep the public filename `Jatin-Sharma-Resume.pdf` or update `personal.resumePath`. Replace `public/favicon.svg` to change the monogram favicon.

### Adding projects

`ProjectCard` supports these fields:

- `title`, `summary`, `problem`, `solution` or `approach`
- `stack`
- `githubUrl` and `demoUrl`
- `image` as a URL string or `{ src, alt, width, height }`
- `featured`

Add only verified project information. Missing repository and demo URLs should remain `null`, which prevents inactive buttons from rendering.

### Configuring the contact form

The current form validates input and prepares a `mailto:` message; it never claims that the website submitted a message. To connect Formspree or another form service:

1. Create and verify the endpoint with the provider.
2. Set `portfolioData.contact.formEndpoint` to the HTTPS endpoint.
3. Test successful, invalid, and failed submissions in the deployed environment.
4. Update the form status copy if the provider requires different behavior.

## SEO and deployment

Before deploying, obtain the final production URL and a social-sharing image. Then:

1. Set `metadata.canonicalUrl` and `metadata.openGraphImage` in `src/data/portfolioData.js`.
2. Replace the matching TODO comments in `index.html` with `rel="canonical"`, `og:url`, `og:image`, and Twitter image tags.
3. Run `npm run validate` and preview the production build.

Deploy the contents of `dist/` to a static host such as Vercel, Netlify, Cloudflare Pages, or another static web server. The site uses same-page anchor navigation and does not require application routes. Serve over HTTPS and confirm that `/Jatin-Sharma-Resume.pdf`, `/favicon.svg`, and `/robots.txt` remain publicly accessible.

## Accessibility and motion

The interface includes semantic landmarks, a skip link, visible keyboard focus, accessible mobile navigation, live feedback for copy and form actions, and reduced-motion support. After content or layout changes, verify keyboard navigation and widths from 320px through desktop before deployment.

## Intentional placeholders

These values are deliberately unpublished until verified:

- Availability wording
- Canonical production URL
- Open Graph image
- Featured-project repository and live demo URLs
- Additional project entries
- Hosted contact-form endpoint

They are centralized in `src/data/portfolioData.js` and are reported as expected notices by `npm run validate`.

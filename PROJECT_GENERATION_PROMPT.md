# Project Generation Prompt

Use this prompt to generate a portfolio website with the same structure, design direction, deployment model, and documentation quality as this project.

Replace every `[PLACEHOLDER]` before running the prompt.

```text
Create a complete professional portfolio/resume website for GitHub Pages.

Tech stack:
- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- GitHub Actions deployment to GitHub Pages
- Static frontend only, no backend

Project goal:
Build a responsive, modern, corporate-style single-page portfolio website for:

Name: [FULL_NAME]
Role: [ROLE_TITLE]
GitHub username: [GITHUB_USERNAME]
Repository name: [REPOSITORY_NAME]
Expected GitHub Pages URL: https://[GITHUB_USERNAME].github.io/[REPOSITORY_NAME]/

Design requirements:
- Professional corporate portfolio style
- Modern clean UI
- Dark navy / blue / cyan accent colors
- Light and dark theme toggle
- English / Thai language toggle
- Responsive desktop and mobile layout
- Sticky desktop header
- Mobile-friendly navigation
- Smooth scrolling
- Card-based sections
- Subtle Framer Motion animation on hover and accordion expand/collapse
- Good typography
- Mobile-first design
- Must look good for interviewer presentation
- Avoid backend server

Hero requirements:
- Profile/photo card
- Name
- Portfolio label
- Professional AI/tool-aware tagline
- Social links
- Summary card
- Header: Enterprise Software Delivery
- Professional summary paragraph
- Three value cards:
  1. Cross-Platform Development
  2. AI Integration & Engineering
  3. Agile & DevOps Practice
- Do not show duplicated CTA buttons in Hero
- Mobile view should be compact and readable

Required sections:
1. Home / Hero
2. About
3. Skills
4. Experience timeline
5. Projects
6. Certificates
7. Education
8. Contact

About section:
- Professional overview
- Mention full software development lifecycle:
  Requirements, Planning, Designing, Coding, Testing, Monitoring, Controlling, Reporting, Supporting, Coordinating
- Include work focus:
  Coding: [CODING_PERCENT]%
  Design & Documentation: [DESIGN_PERCENT]%
  Lead & Support: [LEAD_PERCENT]%

Skills section:
Group skills by category:
- Backend
- Frontend
- Mobile
- DevOps & Cloud
- Database & Reporting
- Quality & Process
- UI Frameworks
- Architecture

Experience section:
- Create a clean timeline layout
- Show company, role, period, location, business/domain, summary, key achievements, and technologies
- Add short “Key Achievements” per job

Projects section:
- Split projects by career phase:
  - Current phase: 2022 onward / current company
  - Earlier phase: up to 2021 / previous experience
- Use expandable/collapsible panels
- On desktop, stat boxes:
  - 1 stat = one normal-width box
  - 2 stats = two boxes
  - 3 stats = three boxes in one row
- On mobile, all expandable panels should default collapsed
- Include project cards with:
  title, description, impact, technologies, icon

Certificates section:
- Split certificates by career phase:
  - Recent certificates from 2022 onward
  - Earlier certificates / awards / credentials up to 2021
- Provider-based grouping
- Expandable panels for large certificate lists
- PDF links should open in a new tab
- Certificates stored under public/certificates/
- Earlier evidence stored under public/before2021/

Education section:
- Show degree, school, period, grade if available, and project/detail

Contact section:
Include:
- LinkedIn: [LINKEDIN_URL]
- GitHub: https://github.com/[GITHUB_USERNAME]
- Email: [EMAIL]

Technical requirements:
- Configure Vite base path correctly for GitHub Pages:
  base: '/[REPOSITORY_NAME]/'
- Add GitHub Actions workflow at .github/workflows/deploy.yml
- Add README.md with setup, screenshots, content update, and deployment instructions
- Add PROJECT_OVERVIEW.md with:
  - Purpose
  - Audience
  - Design direction
  - Main sections
  - Key features
  - Visual assets
  - Preview images
  - Technical notes
  - Mermaid architecture diagram
  - Deployment notes
  - Maintenance notes
- Add LICENSE using MIT License
- Add public/favicon.svg
- Add public/og-image.png or og-image.svg
- Add Open Graph and Twitter metadata in index.html
- Add /public/resume.pdf placeholder instruction if resume file is not available
- Use static data files under src/data/
- Code should be clean, maintainable, and production-ready
- Add important code comments only where useful:
  - public asset path handling
  - mobile collapse behavior
  - any non-obvious shared helper
- Public asset URLs must work both locally and on GitHub Pages.
- Avoid duplicated paths such as /[REPOSITORY_NAME]/[REPOSITORY_NAME]/
- Use root-relative public asset links in index.html, for example /favicon.svg, so Vite can apply the base path correctly.
- Add an assetPath helper that prevents duplicated base paths.

Content data:
Use this person’s information:

Profile:
Name: [FULL_NAME]
Role: [ROLE_TITLE]
Summary:
[PROFESSIONAL_SUMMARY]

Tagline:
[AI_OR_PROFESSIONAL_TAGLINE]

Hero value cards:
1. Cross-Platform Development:
[TEXT]

2. AI Integration & Engineering:
[TEXT]

3. Agile & DevOps Practice:
[TEXT]

About:
[ABOUT_TEXT]

Skills:
Backend: [BACKEND_SKILLS]
Frontend: [FRONTEND_SKILLS]
Mobile: [MOBILE_SKILLS]
DevOps & Cloud: [DEVOPS_SKILLS]
Database & Reporting: [DATABASE_SKILLS]
Quality & Process: [QUALITY_PROCESS_SKILLS]
UI Frameworks: [UI_FRAMEWORKS]
Architecture: [ARCHITECTURE_SKILLS]

Experience:
[PASTE_EXPERIENCE_ITEMS]

Projects:
[PASTE_PROJECT_ITEMS]

Certificates:
[PASTE_CERTIFICATE_ITEMS]

Education:
[PASTE_EDUCATION_ITEMS]

Contact:
LinkedIn: [LINKEDIN_URL]
GitHub: https://github.com/[GITHUB_USERNAME]
Email: [EMAIL]

Expected output:
Generate the complete project structure and all required files:
- package.json
- vite.config.ts
- tsconfig files
- tailwind.config.ts
- postcss.config.js
- eslint.config.js
- index.html
- src/main.tsx
- src/App.tsx
- src/styles.css
- src/data/profile.ts
- src/data/i18n.ts
- src/data/certificates.ts
- src/data/before2021.ts
- public/favicon.svg
- public/profile-avatar.svg
- public/og-image.svg or og-image.png
- public/screenshots placeholder folder
- public/certificates placeholder folder
- public/before2021 placeholder folder
- .github/workflows/deploy.yml
- README.md
- PROJECT_OVERVIEW.md
- LICENSE

After generating:
- Run npm install
- Run npm run lint
- Run npm run build
- If possible, start local dev server and verify desktop/mobile layout
- Generate screenshots:
  public/screenshots/desktop-home.png
  public/screenshots/mobile-home.png
  public/screenshots/projects-section.png
  public/screenshots/certificates-section.png
- Commit and push to GitHub main branch
- Confirm GitHub Actions deployment succeeds
```

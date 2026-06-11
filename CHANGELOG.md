# Changelog

All notable changes to this project are documented here.

This project follows a practical date-based changelog. Version numbers are tracked in `package.json`.

## Unreleased

### Added

- Added SVG and PNG portfolio QR code assets for resume documents.
- Updated README asset documentation for the resume QR code.
- Added Vercel Free Hobby deployment configuration.
- Added Vercel deployment documentation.

### Changed

- Updated Vite base path handling so Vercel builds use `/` while GitHub Pages builds keep `/JakapanK-Portfolio/`.

### Verified

- `npm test`
- `npm run lint`
- `npm run build`
- `VERCEL=1 npm run build`

## [1.1.4] - 2026-06-10

### Changed

- Kept Skill cards mounted with stable IDs so Technology stack content remains visible when switching languages.
- Stabilized localized list keys across Hero, About, Experience, Projects, and lifecycle content to prevent remount issues when switching languages.
- Updated Contact copy to better fit the contact section.
- Added regression coverage for switching Skills between English and Thai.
- Added regression coverage for other localized sections after language switching.
- Updated the portfolio footer version from `1.1.3` to `1.1.4`.

### Verified

- `npm test`
- `npm run lint`
- `npm run build`

## [1.1.3] - 2026-06-10

### Changed

- Moved university academic project evidence from Earlier Sample Projects into the Education section.
- Added Academic Projects link groups to master's and bachelor's education cards in English and Thai.
- Added language switcher tooltips for English and Thai.
- Kept Education cards mounted with stable IDs so academic background content remains visible when switching languages.
- Reduced the Education section top spacing so Academic background aligns more closely with other portfolio sections.
- Changed Education and Contact backgrounds so Education no longer shares the same white band as Certificates.
- Changed the footer background so it contrasts with the Contact section.
- Removed the University Software Projects archive card to avoid duplicate academic content in the Projects section.
- Updated tests to verify academic project links in Education and the removed earlier-project archive card.
- Updated the portfolio footer version from `1.1.2` to `1.1.3`.

### Verified

- `npm test`
- `npm run lint`
- `npm run build`

## [1.1.2] - 2026-06-10

### Changed

- Expanded Thai localization coverage for footer copy, current project links, work focus labels, SDLC lifecycle labels, skill category labels, experience role metadata, and education entries.
- Added Thai school names for the Education section while keeping recognizable NIDA and KMITL abbreviations.
- Added Thai archive evidence link labels for key earlier sample project and team knowledge sharing files.
- Updated localization tests to cover the new Thai UI copy and link labels.
- Updated the portfolio footer version from `1.1.1` to `1.1.2`.

### Verified

- `npm test`
- `npm run lint`
- `npm run build`

## [1.1.1] - 2026-06-10

### Added

- Added the Agentic AI Team Sharing 2026 presentation to the Team Knowledge Sharing project evidence.
- Added an Agentic AI tag to the team sharing archive card.
- Added every evidence file under `public/before2021/sampleprojects/3-systemarchitecturedesign` and `public/before2021/sampleprojects/4-tools` to the earlier project archive.
- Added every evidence file under `public/before2021/sampleprojects/6-sharetoteam`, including SignalR, SonarLint, and Jira/Confluence sharing documents.

### Changed

- Split the combined Architecture, DevOps, and Engineering Tools archive into separate System Architecture Design and Engineering Tools and Practice cards.
- Split the earlier project archive into separate Example Source Code and Team Knowledge Sharing cards.
- Removed preview thumbnails from the System Architecture Design and Engineering Tools and Practice archive cards while keeping the files available as evidence links.
- Renamed the transportation archive card and expanded PTGIS, PVM, and TMS labels for clearer project evidence.
- Fixed active navigation highlighting so Contact is selected when visitors scroll to the bottom of the page.
- Added Thai localized titles, categories, summaries, and tags for Earlier Sample Projects archive cards.
- Updated the portfolio footer version from `1.1.0` to `1.1.1`.

### Verified

- `npm test`
- `npm run build`

## [1.1.0] - 2026-05-29

### Added

- Added the current project version to the portfolio footer.
- Added clickable education evidence links for master's and bachelor's qualifications and transcripts.
- Added Telehealth / Telemedicine video evidence under `public/video/`.
- Added demo links for Code Review Pilot AI, Dev Pilot AI, and Automate Test Pilot AI.
- Added Dev Pilot AI and Automate Test Pilot AI to Current Projects.
- Added technology tags based on the related project repositories:
  - Dev Pilot AI: Flutter, Dart, Riverpod, Hive, OpenAI API, GitHub Actions, GitHub Pages.
  - Code Review Pilot AI: React Native, Expo, Node.js, NestJS, Prisma, PostgreSQL, OpenAI, GitHub OAuth.
  - Automate Test Pilot AI: Playwright, TypeScript, Node.js, OpenAI API, Applitools Eyes, GitHub Actions, GitHub Pages.
- Added `AGENTS.md` with contributor and AI-agent workflow rules.
- Added changelog and version tracking documentation.

### Changed

- Updated Current Projects to focus on portfolio-ready AI and Telemedicine projects.
- Removed Android Azure Communication Services Calling App and Enterprise .NET Core API Services from Current Projects.
- Updated local Vite base behavior so development can run from `/` while production keeps `/JakapanK-Portfolio/`.
- Expanded tests to cover education evidence links, video links, demo links, and project technology tags.
- Updated README and project overview documentation for the new workflow and project evidence.

### Verified

- `npm test`
- `npm run build`

## [1.0.0] - 2026-05-23

### Added

- Added smoke tests for the portfolio app covering hero rendering, language switching, theme switching, and mobile expandable panel defaults.
- Added reusable project generation prompt documentation.
- Added architecture and key code behavior documentation.

### Verified

- `npm test`
- `npm run build`

## [0.9.0] - 2026-05-22

### Added

- Added the initial single-page portfolio structure with Hero, About, Skills, Experience, Projects, Certificates, Education, and Contact sections.
- Added English and Thai localization support.
- Added light and dark theme support.
- Added responsive navigation and mobile-friendly expandable panels.
- Added project and certificate archive sections for earlier career evidence.
- Added MIT license.
- Added profile, Open Graph, favicon, and screenshot assets.

### Changed

- Refined hero layout, profile messaging, active navigation highlighting, card layouts, and mobile spacing.
- Improved responsive behavior for project panels, stat cards, and archive sections.
- Renamed public archive assets to URL-safe filenames for GitHub Pages compatibility.
- Updated screenshots and project overview documentation.

### Verified

- GitHub Pages-oriented Vite production build.

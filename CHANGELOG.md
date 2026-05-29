# Changelog

All notable changes to this project are documented here.

This project follows a practical date-based changelog. Version numbers are tracked in `package.json`.

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

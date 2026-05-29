# AGENTS.md

Guidance for AI coding agents and contributors working in this repository.

## Project Context

This is a static React + Vite + TypeScript portfolio website for Jakapan Kanta. It is deployed to GitHub Pages at:

```text
https://ligerking007.github.io/JakapanK-Portfolio/
```

The app renders from local TypeScript data files and public assets. There is no backend service.

## Required Workflow

For every code or content change:

1. Update or add unit tests in `src/App.test.tsx` when behavior, rendered content, links, asset paths, language switching, theme behavior, or responsive defaults change.
2. Update relevant Markdown documentation when project structure, commands, content policy, public assets, deployment behavior, screenshots, or maintenance rules change.
3. Update `CHANGELOG.md` and `package.json` when preparing a visible release or notable portfolio update.
4. Run verification before handing off:

```bash
npm test
npm run build
```

Run `npm run lint` as well when code style, imports, or TypeScript structure changes.

## Content Rules

- Keep English and Thai content aligned in `src/data/i18n.ts`.
- Any new visible UI copy must support both English (`en`) and Thai (`th`) localization.
- Keep shared project/profile data in `src/data/profile.ts` consistent with localized project data.
- Register public certificates in `src/data/certificates.ts`.
- Register earlier project or credential artifacts in `src/data/before2021.ts`.
- Use URL-safe public filenames: avoid spaces, `#`, and special characters.
- Use `publicAsset()` from `src/App.tsx` for links to files under `public/` so local development and GitHub Pages paths both work.

## UI Rules

- Preserve the single-page portfolio structure and existing visual system.
- Keep cards compact, scannable, and responsive across mobile, tablet, and desktop viewports.
- New UI must be responsive by default and must not require horizontal scrolling on mobile.
- Do not add marketing-style landing sections unless explicitly requested.
- Maintain light and dark theme compatibility for new UI, including readable text, borders, backgrounds, hover states, and focus states.
- For new links that open files or external demos, use clear labels and open them in a new tab with `target="_blank"` and `rel="noreferrer"`.

## Deployment Notes

- Production builds must keep the GitHub Pages base path `/JakapanK-Portfolio/`.
- Local development may use `/` as the base path.
- After changing Vite base behavior, public asset handling, or deployment config, verify both local and production build output.

## Documentation Checklist

Update at least one relevant `.md` file when changes affect:

- Project sections or visible portfolio content
- Commands or setup
- Test expectations
- Deployment behavior
- Public asset folders
- Screenshots or preview material
- Contributor or agent workflow
- Version or changelog entries

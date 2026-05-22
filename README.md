# Jakapan Kanta Portfolio

Professional single-page portfolio website for **Jakapan Kanta**, Senior Software Developer.

Built for GitHub Pages with:

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React icons
- English / Thai language toggle
- Light / Dark theme toggle
- GitHub Actions deployment

## Live URL

Expected GitHub Pages URL:

```text
https://ligerking007.github.io/JakapanK-Portfolio/
```

The Vite base path is configured in `vite.config.ts`:

```ts
base: '/JakapanK-Portfolio/'
```

If the repository name changes, update this value before deploying.

## Local Setup

Install dependencies:

```bash
nvm use
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project includes a GitHub Actions workflow at:

```text
.github/workflows/deploy.yml
```

Deployment steps:

1. Push the repository to GitHub as `JakapanK-Portfolio`.
2. Go to repository **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. GitHub Actions will build the Vite app and deploy the `dist` artifact.

## Content Updates

Most portfolio content is stored in:

```text
src/data/i18n.ts
src/data/certificates.ts
src/data/before2021.ts
src/data/profile.ts
```

Update this file to adjust:

- English / Thai display copy
- Light / Dark theme behavior in `src/App.tsx` and `src/styles.css`
- Profile summary
- Work focus
- Skills
- Experience timeline
- Projects
- Certificates
- Education
- Contact links

Certificate PDF files are stored in:

```text
public/certificates/
```

Add new PDF files under the provider folder, then register them in `src/data/certificates.ts`.

Earlier credentials and sample project artifacts are stored in:

```text
public/before2021/
```

Curated archive items are registered in `src/data/before2021.ts` and displayed inside the Projects and Certificates sections as the "Up to 2021" career phase.

Profile and share assets are stored in:

```text
public/profile.jpg
public/favicon.svg
public/og-image.png
```

Replace `public/profile.jpg` with the final profile photo when needed.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── og-image.svg
│   ├── profile-avatar.svg
│   ├── profile.jpg
│   ├── before2021/
│   └── certificates/
├── src/
│   ├── data/before2021.ts
│   ├── data/certificates.ts
│   ├── data/i18n.ts
│   ├── data/profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── PROJECT_OVERVIEW.md
```

# Markdown Resume Server

This directory contains a local copy of the Markdown Resume Nuxt app used to edit and preview the resume in `../resume.md` with custom styles in `../resume.css`.

## Setup

Install dependencies from this directory:

```bash
pnpm install
```

Build the workspace packages once before running the app:

```bash
pnpm build:pkg
```

Start the local development server:

```bash
pnpm dev
```

Nuxt will print the local URL, usually:

```text
http://localhost:3000
```

## Notes

- New default resume content lives in `site/src/utils/constants/default.ts`.
- Existing resumes are stored in browser IndexedDB/localForage, so changes to the default template apply when creating a new resume.
- Optional Google Fonts support requires a `site/.env` file with `NUXT_PUBLIC_GOOGLE_FONTS_KEY`.


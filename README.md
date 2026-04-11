# GOFR Web

This folder contains a self-contained Vue + Vite website for presenting the GOFR project.

## Purpose

The folder is designed so you can copy it into a separate GitHub repository, such as `gofr.github.io`, and deploy it as a project website.

It already includes:

- copied project images
- copied report PDFs
- copied top-level documentation files needed for the site resources section

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm install
npm run build
```

The generated static site will be in `dist`.

## Deployment Notes

- `vite.config.js` uses `base: './'` so the site is portable when copied into another repository.
- If you deploy it as the root of `gofr-2026.github.io`, this relative base will still work.
- The current GitHub repository link in the site points to the existing project repo and can be updated later inside `src/App.vue`.

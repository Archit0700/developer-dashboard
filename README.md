# Developer Dashboard

A lightweight developer portfolio dashboard built with HTML, CSS, and TypeScript.

## What it does

- Presents a developer profile and technology stack
- Shows selected projects in a clean card-based layout
- Includes GitHub-focused engineering metrics
- Provides a responsive layout for desktop and mobile
- Uses typed data models so the UI is easy to extend

## Tech Stack

- TypeScript
- HTML5
- CSS3
- Vite

## Project Structure

```text
src/
  main.ts       # Application data and rendering
  styles.css    # Responsive UI and design system
index.html      # Application shell
package.json    # Scripts and dependencies
tsconfig.json   # TypeScript configuration
vite.config.ts  # Vite configuration
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Portfolio Goal

This project is intentionally small: it demonstrates clean frontend structure, typed TypeScript, responsive UI, and an interface that can evolve into a real developer analytics product.

## Development Notes

- Keep UI components focused and easy to maintain.
- Prefer small, meaningful changes over unnecessary complexity.
- Validate production builds before merging larger features.
- Keep documentation synchronized with the project structure.
- Review the README whenever the application architecture changes.
- Document notable setup or build changes for contributors.
- Keep examples aligned with the current npm scripts.

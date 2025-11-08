# CSS Folder — README

Purpose
- Centralize all CSS used by the project. This folder contains only stylesheets and related assets (variables, mixins, utilities). No HTML or JS.

Recommended structure
- base/ — reset, typography, variables
- components/ — component-level styles (buttons, cards)
- layout/ — grid, header, footer, containers
- utilities/ — helper and utility classes (spacing, visibility)
- vendors/ — third-party CSS (kept separate)
- main.css (or main.scss) — entry stylesheet that imports the pieces

Conventions
- Use a predictable naming strategy (BEM or similar).
- Keep selectors low-specificity and avoid global element styles.
- Prefer CSS custom properties for theming and reusable values.
- Organize rules mobile-first and add breakpoints via media queries.

How to include
- If using plain CSS: import the compiled main.css into your build or serve it as a static asset.
- If using a preprocessor: compile main.scss → main.css and include the compiled file.

Tooling & quality
- Recommended: stylelint for linting, Autoprefixer, and a minifier for production.
- Optional: PostCSS plugins (nesting, custom-properties), PurgeCSS for unused-rule removal.
- Keep source maps enabled for development.

Contributing
- Add new styles in the appropriate folder; update main.scss imports.
- Run linters and build, and follow the naming and responsive conventions.
- Document any global variables or utilities you add.

Notes
- This README intentionally covers only CSS workflow and organization. Integration into HTML/JS is out of scope.
- Keep components small and reusable; avoid coupling style to markup semantics.

License
- Follow the repository license (see project root).

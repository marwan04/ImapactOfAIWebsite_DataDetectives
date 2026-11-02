# Contributing to DataDetectives

This guide describes our proposed team workflow. We may adjust it as the project develops. The goal is to make contributions easy to understand, review, and integrate.

## 1. Get started

### Prerequisites

- Git
- Node.js and npm compatible with the Vite version in `package.json`

### Set up locally

```bash
git clone https://github.com/marwan04/ImapactOfAIWebsite_DataDetectives.git
cd ImapactOfAIWebsite_DataDetectives
npm install
npm run dev
```

Open the local address printed by Vite (typically `http://localhost:5173/`).

Before starting new work, pull the latest changes:

```bash
git switch main
git pull origin main
```

## 2. Work on a feature branch

Avoid developing directly on `main`. Create a branch for each focused change:

```bash
git switch main
git pull origin main
git switch -c feature/homepage
```

Suggested branch prefixes:

- `feature/` — new pages, components, or visualizations
- `fix/` — bug fixes
- `docs/` — documentation
- `style/` — styling changes
- `chore/` — tooling or maintenance

Use descriptive names, for example `feature/ai-adoption-chart` rather than `feature/update`.

## 3. Code conventions

- Prefer small, focused React components with clear responsibilities.
- Use **PascalCase** for React component filenames (for example, `SiteHeader.jsx`) and component names.
- Use descriptive **camelCase** names for JavaScript variables and functions.
- Keep reusable components separate from route-level pages and individual visualizations as the project grows.
- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`, appropriate heading levels, lists, and labels).
- Keep styling in dedicated CSS files rather than inline style attributes. Use CSS selectors/classes to style SVG elements, as required by the assignment.
- Follow the agreed design system: **Roboto Slab** for headings and **Fira Sans** for body text.
- Do not add a library unless it solves a real need; discuss significant dependencies with the team first.
- Do not commit `node_modules/`, build output, secrets, API keys, or local environment files.

These conventions are team recommendations unless specifically identified as assignment requirements.

## 4. Adding a visualization

Before implementation, agree on the visualization's question, intended message, dataset, and chart type. Each visualization contribution should include:

1. **Question and message:** What is the viewer supposed to learn?
2. **Source:** Dataset title, publisher, original URL, access date, and applicable license/usage terms once verified.
3. **Processing:** Filters, cleaning, units, aggregation, and any assumptions.
4. **Design:** Why the chosen chart and visual encodings fit the message.
5. **Interaction:** What users can do, and what each control means.
6. **Limitations:** Missing data, uncertainty, or interpretation cautions.

Keep visualization code reasonably isolated so teammates can work on separate pages. Use readable axes, labels, legends, and units. Prefer accessible interactions and check that charts remain usable on smaller screens.

Do not claim findings until they are supported by the selected data.

## 5. Check your work

Before opening a pull request:

```bash
npm run lint
npm run build
```

These commands assume the corresponding scripts exist in `package.json`; if your local project differs, check its scripts first.

Also verify the relevant page manually:

- It loads without console errors.
- Navigation and interactions work.
- The layout is usable on desktop and mobile.
- Headings and other HTML elements are semantic.
- SVG appearance is controlled by CSS selectors rather than inline styling.
- Data, labels, units, and citations are accurate when applicable.

The team will validate the rendered HTML using the [W3C Markup Validation Service](https://validator.w3.org/) as part of the assignment checks. React/Vite's source `index.html` is not a substitute for checking the rendered page.

## 6. Commit and open a pull request

Keep commits small and descriptive. Examples:

- `feat: add homepage project overview`
- `fix: correct chart axis labels`
- `docs: explain local development setup`
- `style: improve mobile navigation`

Push your branch:

```bash
git add .
git commit -m "feat: add homepage project overview"
git push -u origin feature/homepage
```

Then open a pull request targeting `main`. Include:

- **Summary:** What changed and why?
- **Testing:** Which checks were run, and did they pass?
- **Screenshots:** For visible UI changes, when useful.
- **Data notes:** Sources and transformations for visualization changes.
- **Follow-ups:** Anything incomplete or needing attention.

Ask another teammate to review before merging when possible. Resolve feedback and avoid merging code that breaks the site. Branch protection and automated checks may be added later; they are not assumed to be configured now.

## 7. Continuous deployment

The website is automatically deployed to GitHub Pages when changes are merged into `main`.

Before submitting a pull request, contributors should run:

```bash
npm run lint
npm run build
```

Only tested and reviewed changes should be merged into `main`. A successful merge triggers the deployment workflow defined in `.github/workflows/deploy.yml`.

## 8. Keep documentation current

Update the README or relevant documents when a change affects setup, architecture, navigation, data sources, or team conventions. Do not document planned features as if they are already implemented.
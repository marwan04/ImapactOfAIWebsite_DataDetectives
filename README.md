# Mapping the Impact of AI

**DataDetectives | Data Visualization Project | University of Genoa**

An interactive website exploring the impact of artificial intelligence through data visualization. The project will evolve during the course as the team adds pages featuring different visualization types.

> **Project status:** React + Vite setup, template cleanup, and initial application layout completed. Reusable Header and Footer components and a dedicated Home page are implemented. ESLint and production build checks have passed for the initial setup. Homepage content, visualizations, and GitHub Pages deployment are still in development.

## Project overview

The objective is to build an interactive website that communicates insights about the impact of artificial intelligence using publicly available data. The site will introduce the project and its datasets, then link to dedicated visualization pages developed over the course.

The specific questions, datasets, and messages for each visualization will be documented as they are selected. No visualization results are claimed at this stage.

## Team

**Group:** DataDetectives

**Team members:** 
- Marwan Alrifai: NodeJs, React, RestAPI and different types of databases.
- Zarifa Karimova: HTML, CSS basics
- Vladislav Solodov: HTML, parsed websites


## Technology stack

| Technology | Purpose | Status |
| --- | --- | --- |
| React | Component-based UI | Initialized |
| Vite | Local development and production builds | Initialized |
| JavaScript / JSX | Application logic and components | In use |
| CSS | Global styling and typography; future SVG styling | Initial setup completed |
| Git / GitHub | Version control and collaboration | In use |
| GitHub Pages | Public hosting | Planned |
| D3.js or another suitable library | Interactive visualizations | To be evaluated per visualization |
| React Router | Navigation between pages | Planned; not yet installed |

## Getting started

### Prerequisites

- Git
- Node.js and npm compatible with the version of Vite declared in `package.json`


### Local setup

```bash
git clone https://github.com/marwan04/ImapactOfAIWebsite_DataDetectives.git
cd ImapactOfAIWebsite_DataDetectives
npm install
npm run dev
```

Open the local URL printed by Vite, typically
http://localhost:5173/.

### Development commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run preview  # Preview the production build
```

Both `npm run lint` and `npm run build` have
been verified successfully after the initial
Vite template cleanup.

## Project structure

The following is the **proposed target structure**, not a claim that all files already exist:

```text
src/
├── components/
│   └── layout/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Footer.jsx
│       └── Footer.css
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

The structure may evolve as the visualization assignments become clearer.

## Collaboration workflow

The proposed team workflow is:

1. Pull the latest changes from `main`.
2. Create a focused branch, such as `feature/homepage` or `feature/visualization-01`.
3. Make changes and test them locally.
4. Commit with a descriptive message.
5. Open a pull request explaining the changes and how they were tested.
6. Have another team member review the pull request before merging into `main` when possible.

Detailed contribution guidelines are available in
[CONTRIBUTING.md](docs/CONTRIBUTING.md).

Branch protection and automated checks are not yet configured.

## Visualization quality checklist

Before merging a new visualization, check that it:

- Answers a clear question and communicates a defensible message.
- Documents its dataset, filters, aggregations, and transformations.
- Uses appropriate visual encodings and readable labels/units.
- Explains interactions and any important limitations.
- Works on common screen sizes and supports accessible interaction where feasible.
- Uses CSS selectors for SVG styling rather than inline styling.
- Integrates consistently with the rest of the site.

## Links

- **Repository:** https://github.com/marwan04/ImapactOfAIWebsite_DataDetectives.git
- **Live website:**
- **Course:** Data Visualization — University of Genoa

# Mapping the Impact of AI

**DataDetectives | Data Visualization Project | University of Genoa**

An interactive website exploring the impact of artificial intelligence through data visualization. The project will evolve during the course as the team adds pages featuring different visualization types.

> **Project status:** Initial React + Vite setup completed. Website content, visualizations, and public deployment are planned or in progress.

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
| CSS | Site styling and SVG selectors | Planned |
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
git clone <REPOSITORY_URL>
cd ImpactOfAIWebsite_DataDetectives
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173/`). Replace `<REPOSITORY_URL>` with the actual GitHub clone URL. If you use a different local directory name, adjust the `cd` command.

### Other useful commands

```bash
npm run build      # Create a production build in dist/
npm run preview    # Preview the production build locally
```

Lint commands depend on the scripts configured in `package.json`; check that file before running them.

## Project structure

The following is the **proposed target structure**, not a claim that all files already exist:

```text
.
├── .github/
│   ├── workflows/                 # CI and deployment workflows
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   ├── DESIGN_GUIDELINES.md
│   └── DATA_SOURCES.md
├── public/
│   └── images/
├── src/
│   ├── components/                # Reusable UI and layout
│   ├── pages/                     # Route-level pages
│   ├── visualizations/            # Individual charts and interactions
│   ├── data/                      # Local datasets and processing helpers
│   ├── styles/                    # Shared CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
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

These are recommended practices; branch protection and automated checks are not yet configured. More detailed rules will be added in `docs/CONTRIBUTING.md`.

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

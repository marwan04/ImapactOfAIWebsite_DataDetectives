# Application Architecture

## Overview

DataDetectives is a React single-page application built with Vite. It will host interactive data visualizations exploring the impact of artificial intelligence.

The application currently consists of a shared layout and an introductory homepage. Additional visualization pages will be introduced as course assignments progress.

## Application structure

```text
src/
├── components/
│   └── layout/
│       ├── Header.jsx
│       ├── Header.css
│       ├── Footer.jsx
│       └── Footer.css
├── pages/
│   ├── Home.jsx
│   └── Home.css
├── App.jsx
├── main.jsx
└── index.css
```

## Component responsibilities

| Component | Responsibility |
|---|---|
| `main.jsx` | Mounts the React application and imports global CSS |
| `App.jsx` | Composes the shared layout |
| `Header.jsx` | Displays project branding and navigation |
| `Home.jsx` | Contains homepage content |
| `Footer.jsx` | Displays project and university attribution |
| `index.css` | Global styles, typography, and layout rules |
| `Header.css` | Header-specific styles |
| `Footer.css` | Footer-specific styles |

## Component hierarchy

```text
main.jsx
└── App
    ├── Header
    ├── Home
    └── Footer
```

## Component description 

### Homepage

The `Home` component implements the introductory page of the website.

It contains:

- A hero section introducing the project.
- An overview describing the project's objectives.
- Placeholder cards for upcoming visualization pages.
- A section identifying the DataDetectives team members.

The homepage uses semantic HTML and responsive CSS. Visualization topics, datasets, and navigation links will be added as the corresponding pages are developed.

## Styling conventions

- Use Roboto Slab for headings.
- Use Fira Sans for body text.
- Keep styling in dedicated CSS files.
- Use semantic HTML elements.
- Use CSS selectors for SVG styling rather than inline styling.
- Design components to work across desktop and mobile screen sizes.

The current layout uses a UniGe-inspired blue color scheme. A complete design system has not yet been finalized.

## Navigation

The application currently displays a single Home page.

React Router has not yet been installed. Routing will be introduced when secondary visualization pages are implemented.

## Future development

The architecture will expand to support dedicated visualization pages, reusable chart components, dataset processing, and interactive controls.

These features are planned and are not part of the current implementation.

## Deployment

GitHub Pages is the intended hosting platform. Deployment configuration has not yet been implemented.

## Maintaining this document

Update this document whenever the application structure, component responsibilities, routing, or deployment architecture changes.
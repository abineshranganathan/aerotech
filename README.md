# aerotechinfraequipment - React + TypeScript + Vite

A modern e-commerce storefront built with React, TypeScript, and Vite. This template provides a minimal setup to get React working in Vite with HMR and ESLint rules.

## About This Website

aerotechinfraequipment is a responsive web application featuring:

- **Home Page**: Welcome section with store introduction
- **Products Page**: Showcase of available products
- **About Page**: Information about the store
- **Responsive Layout**: Mobile-first design with Bootstrap 5 integration
- **Modern Styling**: SCSS with organized abstracts, base styles, and layouts

## Tech Stack

- **Frontend Framework**: React 19.2.4 with TypeScript
- **Build Tool**: Vite 8.0.1
- **Routing**: React Router DOM 7.13.2
- **Styling**: SCSS with Bootstrap 5.3.8
- **Compiler**: React Compiler (enabled by default)
- **Linting**: ESLint with TypeScript support

## Project Structure

```
src/
├── components/layout/      # Reusable layout components (Header, Footer)
├── layout/                 # Main layout wrapper
├── pages/                  # Page components (Home, Products, About)
├── styles/                 # SCSS styles with organized structure
│   ├── abstracts/          # Variables and mixins
│   ├── base/               # Reset, typography, globals
│   ├── layout/             # Layout-specific styles
│   └── pages/              # Page-specific styles
├── App.tsx                 # Main app component with routing
└── main.tsx                # React entry point
```

## Getting Started

### Development

```bash
npm run dev
```

Starts the development server with hot module reloading (HMR).

### Build

```bash
npm run build
```

Compiles TypeScript and builds the production bundle.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Linting

```bash
npm run lint
```

Run ESLint to check code quality.

## Available Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - Uses Oxc for fast React compilation
- [@rolldown/plugin-babel](https://github.com/rolldown/rolldown) - Babel integration with React Compiler preset

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information. Note: This impacts Vite dev & build performance.

## Expanding ESLint Configuration

For production applications, update [eslint.config.js](eslint.config.js) to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // ...other configs...
      tseslint.configs.recommendedTypeChecked,
      // or for stricter rules:
      tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also add React-specific linting with [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom).
# Daisy Documentation UI

A minimal React + TypeScript + Vite project setup.

## Tech Stack

- **React 18.3** - Modern React with hooks and concurrent features
- **TypeScript 5.5** - Type-safe JavaScript development
- **Vite 5.4** - Fast build tool with Hot Module Replacement (HMR)
- **Tailwind CSS v4** - Latest version with native Vite integration
- **DaisyUI v5** - Component library for Tailwind CSS with 21 themes

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/` (default Vite port).

### Building for Production

```bash
# Build the project
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles with Tailwind directives
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node.js files
├── vite.config.ts       # Vite configuration with Tailwind v4 plugin
└── tailwind.config.js   # DaisyUI theme configuration
```

## Features

- ⚡️ Lightning fast HMR with Vite
- 🎯 Full TypeScript support with strict mode
- ⚛️ React 18 with modern hooks
- 🎨 DaisyUI component library with 20+ built-in themes
- 🌓 Theme switching capability (light/dark mode and more)
- 💅 Tailwind CSS for utility-first styling
- 📦 Optimized production builds
- 🔧 Modular and scalable architecture
- ♿️ Accessible components out of the box

## DaisyUI Themes

This project includes all 21 DaisyUI themes. Available themes:
- `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`
- `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`
- `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`
- `black`, `luxury`, `dracula`

To change themes, update the `data-theme` attribute on the root element or use the theme switcher in the app.

## Development Notes

- The project uses strict TypeScript configuration for better type safety
- React StrictMode is enabled for highlighting potential issues
- Hot Module Replacement (HMR) is configured for instant updates during development
- All code includes meaningful comments for better readability
- DaisyUI components are semantic and follow accessibility best practices
- Tailwind CSS utilities can be used alongside DaisyUI components
- **Tailwind CSS v4** uses the new `@tailwindcss/vite` plugin for optimal performance
- CSS imports use the new v4 syntax (`@import "tailwindcss"` instead of directives)
- PostCSS and Autoprefixer are built-in with Tailwind v4 (no separate config needed)

## Next Steps

- Add routing with React Router
- Integrate state management (Redux, Zustand, etc.)
- Set up testing framework (Vitest, Jest, React Testing Library)
- Configure ESLint and Prettier
- Explore more DaisyUI components (modals, drawers, tabs, etc.)
- Customize Tailwind/DaisyUI theme colors

## Useful Resources

- [DaisyUI Documentation](https://daisyui.com/)
- [DaisyUI Components](https://daisyui.com/components/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)


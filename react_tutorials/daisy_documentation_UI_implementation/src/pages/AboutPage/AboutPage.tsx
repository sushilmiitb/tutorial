/**
 * About Page component
 */

import { Card } from '@/components/ui'

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About This Project</h1>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Frontend</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React 18.3</li>
                <li>TypeScript 5.5</li>
                <li>Vite 5.4</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Styling</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Tailwind CSS v4</li>
                <li>DaisyUI v5</li>
                <li>21 Built-in Themes</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
          <p className="mb-4">
            This project follows a modular and scalable architecture with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reusable UI components with TypeScript interfaces</li>
            <li>Custom React hooks for common functionality</li>
            <li>Centralized configuration and constants</li>
            <li>Utility functions for formatting and validation</li>
            <li>Type-safe API service layer</li>
            <li>Path aliases for cleaner imports</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-bold">Lightning Fast HMR</p>
                <p className="text-sm opacity-70">
                  Vite provides instant hot module replacement for rapid development
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-bold">Type Safety</p>
                <p className="text-sm opacity-70">
                  Full TypeScript support with strict mode enabled
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-bold">Beautiful Components</p>
                <p className="text-sm opacity-70">
                  DaisyUI provides accessible, semantic components with multiple themes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-2xl">📦</span>
              <div>
                <p className="font-bold">Optimized Builds</p>
                <p className="text-sm opacity-70">
                  Production builds are automatically optimized and minified
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}


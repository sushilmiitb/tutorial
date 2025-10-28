import { useState } from 'react'
import './App.css'

/**
 * Main App component
 * Demonstrates DaisyUI components with theme switching capability
 */
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  /**
   * Toggles between light and dark themes
   */
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="app-container" data-theme={theme}>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Daisy Documentation UI</h1>
            <p className="py-6">
              React + TypeScript + Vite + DaisyUI
            </p>
            
            {/* Theme Toggle Button */}
            <div className="mb-6">
              <button onClick={toggleTheme} className="btn btn-outline">
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>

            {/* Counter Card */}
            <div className="card bg-base-100 shadow-xl mb-6">
              <div className="card-body">
                <h2 className="card-title">Interactive Counter</h2>
                <p>Click the button to increment the counter</p>
                <div className="card-actions justify-center mt-4">
                  <button 
                    onClick={() => setCount((count) => count + 1)}
                    className="btn btn-primary"
                  >
                    Count is {count}
                  </button>
                </div>
              </div>
            </div>

            {/* DaisyUI Component Showcase */}
            <div className="grid grid-cols-1 gap-4">
              {/* Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-success">Success</button>
              </div>

              {/* Alert */}
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Edit <code className="badge badge-ghost">src/App.tsx</code> to get started!</span>
              </div>

              {/* Badge Showcase */}
              <div className="flex flex-wrap gap-2 justify-center">
                <div className="badge badge-primary">Primary</div>
                <div className="badge badge-secondary">Secondary</div>
                <div className="badge badge-accent">Accent</div>
                <div className="badge badge-ghost">Ghost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

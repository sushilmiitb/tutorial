/**
 * Header component - Main documentation header
 * Logo appears here only on mobile (when drawer is closed)
 */

import { useTheme, useDrawerState } from '@/hooks'
import { Logo } from '@/components/ui'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const isDrawerOpen = useDrawerState()

  return (
    <header className="navbar border-b border-base-300 sticky top-0 z-30 backdrop-blur bg-base-100/95">
      {/* Left Section - Hamburger + Logo (mobile only) */}
      <div className="navbar-start">
        <label htmlFor="main-drawer" className="btn btn-ghost btn-square lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        {/* Logo shows in navbar only when drawer is closed (mobile) */}
        {!isDrawerOpen && <Logo />}
      </div>

      {/* Center Section - Search */}
      <div className="navbar-center hidden lg:flex flex-1 max-w-md">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-full"
          />
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
          Components
        </button>
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
          Templates
        </button>
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
          Figma
        </button>
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-square btn-sm"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square btn-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}


/**
 * Header component - Main documentation header
 * Logo appears here only on mobile (when drawer is closed)
 */

import { useTheme, useDrawerState } from '@/hooks'
import { Logo } from '@/components/ui'
import { AVAILABLE_THEMES } from '@/utils/constants'
import type { Theme } from '@/types'
import {
  Squares2X2Icon,
  DocumentDuplicateIcon,
  SwatchIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline'

/**
 * Theme preview icon component
 * Shows a rounded square with 4 circles representing theme colors
 * @param themeName - The theme name to preview
 */
function ThemePreviewIcon({ themeName }: { themeName: Theme }) {
  return (
    <div data-theme={themeName} className="bg-transparent">
      <div
        className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
      >
        {/* Top left circle - base-content */}
        <div
          className="bg-base-content size-1 rounded-full"
        />
        {/* Top right circle - primary */}
        <div
          className="bg-primary size-1 rounded-full"
        />
        {/* Bottom left circle - secondary */}
        <div
          className="bg-secondary size-1 rounded-full"
        />
        {/* Bottom right circle - accent */}
        <div
          className="bg-accent size-1 rounded-full"
        />
      </div>
    </div>
  )
}

export function Header() {
  const { theme, setTheme } = useTheme()
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

      {/* Center Section - Search
      <div className="navbar-center hidden lg:flex flex-1 max-w-md">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-full"
          />
        </div>
      </div> */}

      {/* Right Section - Actions */}
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex font-normal gap-2">
          <Squares2X2Icon className="h-4 w-4" />
          Components
        </button>
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex font-normal gap-2">
          <DocumentDuplicateIcon className="h-4 w-4" />
          Templates
        </button>
        <button className="btn btn-ghost btn-sm hidden sm:inline-flex font-normal gap-2">
          <SwatchIcon className="h-4 w-4" />
          Figma
        </button>
        
        {/* Theme Selector Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm flex items-center gap-1 border border-base-300 rounded-lg px-2 py-1"
            aria-label="Select theme"
          >
            <PaintBrushIcon className="h-5 w-5" />
            <svg className="w-3 h-3 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content menu menu-vertical mt-1 bg-base-200 rounded-box z-1 w-52 p-2 shadow-lg border border-base-300 max-h-96 overflow-y-auto flex-nowrap">
            <li className="text-sm w-full text-base-content/60 px-3 py-2 font-medium">Theme</li>
            {AVAILABLE_THEMES.map((themeOption) => (
              <li key={themeOption} className="w-full">
                <button
                  onClick={() => setTheme(themeOption)}
                  className="flex items-center gap-2 w-full whitespace-nowrap"
                >
                  <ThemePreviewIcon themeName={themeOption} />
                  <span className="capitalize flex-1 text-left">{themeOption}</span>
                  {theme === themeOption && (
                    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="dropdown dropdown-end">
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
        </div> */}
      </div>
    </header>
  )
}


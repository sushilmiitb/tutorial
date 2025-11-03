/**
 * Custom hook for managing routing and URL state
 * Centralizes all URL/path management logic for the application
 */

import { useState, useEffect } from 'react'

export type Page = 'home' | 'about' | 'dashboard' | 'components' | 'introduction' | 'install' | '404'

/**
 * Helper function to convert URL path to page identifier
 * Used to sync URL with application state
 */
function getPageFromPath(path: string): Page {
  if (path === '/') return 'home'
  if (path === '/about') return 'about'
  if (path === '/dashboard') return 'dashboard'
  if (path === '/introduction' || path === '/intro' || path === '/docs/introduction' || path.startsWith('/introduction')) return 'introduction'
  if (path === '/install' || path === '/docs/install') return 'install'
  if (path.startsWith('/components')) return 'components'
  return '404'
}

/**
 * Hook for managing application routing with URL synchronization
 * @returns Object containing current page, path, and navigation functions
 */
export function useRoute() {
  // Initialize page from current URL path
  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname))
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      setCurrentPath(path)
      setCurrentPage(getPageFromPath(path))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  /**
   * Navigate to a new path
   * Updates both URL and internal state
   */
  const navigate = (path: string) => {
    const page = getPageFromPath(path)
    setCurrentPage(page)
    setCurrentPath(path)
    window.history.pushState({}, '', path)
  }

  return {
    currentPage,
    currentPath,
    navigate,
    setCurrentPage,
    setCurrentPath,
    getPageFromPath,
  }
}

/**
 * Hook for listening to URL changes
 * Useful for components that need to react to URL changes but don't control navigation
 * @returns Current pathname
 */
export function useCurrentPath() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    // Listen for browser back/forward navigation
    window.addEventListener('popstate', handlePopState)
    
    // Listen for programmatic URL changes via pushState/replaceState
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState
    
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args)
      setCurrentPath(window.location.pathname)
    }
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args)
      setCurrentPath(window.location.pathname)
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [])

  return currentPath
}


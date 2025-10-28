/**
 * Custom hook for managing theme state
 */

import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { APP_CONFIG } from '@/config/app.config'
import type { Theme } from '@/types'

/**
 * Hook for managing application theme with persistence
 * @returns Object containing current theme and setter function
 */
export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>(
    APP_CONFIG.storageKeys.theme,
    APP_CONFIG.defaultTheme
  )

  // Apply theme to document element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /**
   * Toggles between light and dark themes
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  }
}


/**
 * Custom hook for managing localStorage with React state
 */

import { useState, useEffect } from 'react'

/**
 * Hook that syncs state with localStorage
 * @param key - The localStorage key
 * @param initialValue - The initial value if key doesn't exist
 * @returns [storedValue, setValue] - Tuple similar to useState
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}


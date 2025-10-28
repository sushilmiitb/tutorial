/**
 * Custom hook for managing boolean toggle state
 */

import { useState, useCallback } from 'react'

/**
 * Hook for managing boolean toggle state
 * @param initialValue - Initial boolean value (default: false)
 * @returns Tuple of [value, toggle, setValue]
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, toggle, setValue] as const
}


/**
 * Custom hook to track drawer state
 * Detects if drawer is open based on screen size and checkbox state
 */

import { useState, useEffect } from 'react'

/**
 * Hook to determine if drawer is in open state
 * @returns boolean indicating if drawer is open (desktop) or closed (mobile)
 */
export function useDrawerState(): boolean {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isOpen
}


/**
 * LocalStorage service for managing browser storage
 */

/**
 * Safely gets an item from localStorage
 */
export const getItem = <T>(key: string): T | null => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error(`Error getting localStorage key "${key}":`, error)
    return null
  }
}

/**
 * Safely sets an item in localStorage
 */
export const setItem = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
  }
}

/**
 * Removes an item from localStorage
 */
export const removeItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
  }
}

/**
 * Clears all items from localStorage
 */
export const clear = (): void => {
  try {
    window.localStorage.clear()
  } catch (error) {
    console.error('Error clearing localStorage:', error)
  }
}


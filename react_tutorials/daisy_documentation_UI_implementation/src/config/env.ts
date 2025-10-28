/**
 * Environment configuration
 * Centralizes access to environment variables with type safety
 */

interface EnvConfig {
  apiUrl: string
  appName: string
  isDevelopment: boolean
  isProduction: boolean
}

export const env: EnvConfig = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  appName: import.meta.env.VITE_APP_NAME || 'Daisy Documentation UI',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}


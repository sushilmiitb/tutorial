/**
 * Application configuration constants
 */

import type { Theme } from '@/types'

export const APP_CONFIG = {
  defaultTheme: 'light' as Theme,
  storageKeys: {
    theme: 'app-theme',
    user: 'app-user',
  },
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
  },
  routes: {
    home: '/',
    about: '/about',
    dashboard: '/dashboard',
    notFound: '/404',
  },
} as const


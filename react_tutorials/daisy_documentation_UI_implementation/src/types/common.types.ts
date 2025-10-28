/**
 * Common type definitions used across the application
 */

export type Theme = 'light' | 'dark' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'forest' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula'

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T> {
  data: T
  message?: string
  status: number
}

export interface ApiError {
  message: string
  code?: string
  status: number
}


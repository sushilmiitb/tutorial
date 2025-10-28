/**
 * User-related type definitions
 */

import type { BaseEntity } from './common.types'

export type UserRole = 'admin' | 'user' | 'guest'

export interface User extends BaseEntity {
  name: string
  email: string
  role: UserRole
  avatar?: string
}

export interface UserProfile extends User {
  bio?: string
  location?: string
  website?: string
}


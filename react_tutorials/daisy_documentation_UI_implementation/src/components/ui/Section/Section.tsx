/**
 * Section component - Consistent spacing wrapper for page sections
 */

import { HTMLAttributes } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLElement> {}

/**
 * Reusable Section wrapper with a default bottom margin
 * @param className - Additional CSS classes
 * @param children - Section content
 */
export function Section({ className = '', children, ...props }: SectionProps) {
  const classes = ['mb-8', className].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}



/**
 * Button component - Wrapper around DaisyUI button with additional functionality
 */

import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  outline?: boolean
  loading?: boolean
  wide?: boolean
  block?: boolean
  children: ReactNode
}

/**
 * Reusable Button component with DaisyUI styling
 * @param variant - Button color variant
 * @param size - Button size
 * @param outline - Whether button has outline style
 * @param loading - Shows loading spinner when true
 * @param wide - Makes button wider
 * @param block - Makes button full width
 * @param children - Button content
 * @param className - Additional CSS classes
 */
export function Button({
  variant = 'primary',
  size = 'md',
  outline = false,
  loading = false,
  wide = false,
  block = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = `btn-${variant}`
  const sizeClass = size !== 'md' ? `btn-${size}` : ''
  const outlineClass = outline ? 'btn-outline' : ''
  const loadingClass = loading ? 'btn-disabled' : ''
  const wideClass = wide ? 'btn-wide' : ''
  const blockClass = block ? 'btn-block' : ''

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    outlineClass,
    loadingClass,
    wideClass,
    blockClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  )
}


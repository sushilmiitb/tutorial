/**
 * Card component - Wrapper around DaisyUI card
 */

import { ReactNode } from 'react'

export interface CardProps {
  title?: string
  children: ReactNode
  actions?: ReactNode
  image?: string
  imageAlt?: string
  bordered?: boolean
  compact?: boolean
  className?: string
}

/**
 * Reusable Card component with DaisyUI styling
 * @param title - Card title
 * @param children - Card content
 * @param actions - Action buttons or elements
 * @param image - Optional image URL for card
 * @param imageAlt - Alt text for image
 * @param bordered - Whether card has border
 * @param compact - Whether card uses compact styling
 * @param className - Additional CSS classes
 */
export function Card({
  title,
  children,
  actions,
  image,
  imageAlt = 'Card image',
  bordered = false,
  compact = false,
  className = '',
}: CardProps) {
  const cardClasses = [
    'card',
    'bg-base-100',
    'shadow-xl',
    bordered ? 'card-bordered' : '',
    compact ? 'card-compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClasses}>
      {image && (
        <figure>
          <img src={image} alt={imageAlt} />
        </figure>
      )}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
        {actions && <div className="card-actions justify-end">{actions}</div>}
      </div>
    </div>
  )
}


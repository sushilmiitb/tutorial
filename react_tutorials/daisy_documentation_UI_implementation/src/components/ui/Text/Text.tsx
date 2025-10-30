/**
 * Text component - Polymorphic typography with semantic HTML tags
 */

import { HTMLAttributes, ReactNode } from 'react'

export type TextStyle = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li'

type HtmlPropsWithoutConflicts = Omit<HTMLAttributes<HTMLElement>, 'style' | 'children'>

export interface TextProps extends HtmlPropsWithoutConflicts {
  /**
   * Typography style that also dictates the underlying HTML tag
   */
  style: TextStyle
  /**
   * Text content or elements
   */
  children: ReactNode
}

/**
 * Default class names per text style for consistent typography
 */
const defaultClassesByStyle: Record<TextStyle, string> = {
  h1: 'text-4xl font-bold text-base-content mb-8 mt-12',
  h2: 'text-3xl font-bold text-base-content mb-6 mt-10',
  h3: 'text-2xl font-semibold text-base-content mb-4 mt-8',
  h4: 'text-xl font-semibold text-base-content mb-2 mt-6',
  h5: 'text-lg font-medium text-base-content mb-1 mt-5',
  h6: 'text-base font-medium text-base-content mb-0 mt-5',
  p: 'text-sm text-base-content/75 mb-4',
  li: 'text-sm text-base-content/75',
}

/**
 * Reusable Text component that maps styles to semantic tags
 * @param style - One of h1..h6 or p
 * @param className - Additional classes to customize spacing/appearance
 * @param children - Content to render
 */
export function Text({ style, className = '', children, ...props }: TextProps) {
  type AllowedTag = TextStyle
  const Tag = style as AllowedTag
  const classes = [defaultClassesByStyle[style], className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}



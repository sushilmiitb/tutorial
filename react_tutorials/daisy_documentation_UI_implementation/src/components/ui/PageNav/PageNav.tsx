/**
 * PageNav component - Previous/Next navigation for documentation pages
 */

import { HTMLAttributes } from 'react'

export interface PageLinkInfo {
  href: string
  label: string
  subLabel?: string
}

export interface PageNavProps extends HTMLAttributes<HTMLDivElement> {
  prev?: PageLinkInfo
  next?: PageLinkInfo
}

/**
 * Renders a horizontal prev/next navigator using daisyUI classes
 */
export function PageNav({ prev, next, className = '', ...props }: PageNavProps) {
  const classes = [
    'flex items-center justify-between gap-4 py-8 border-t border-b border-base-300',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {prev ? (
        <a href={prev.href} className="btn btn-lg items-center justify-start gap-6">
          <span className="text-4xl font-thin flex items-center">❮</span>
          <span className="text-left flex flex-col justify-center">
            <span className="block text-xs text-base-content/60">Prev</span>
            <span className="block text-base font-semibold text-base-content">{prev.label}</span>
          </span>
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a href={next.href} className="btn btn-lg btn-neutral items-center justify-end gap-6">
          <span className="text-right flex flex-col justify-center">
            <span className="block text-xs text-neutral-content/70">Next</span>
            <span className="block text-base font-semibold text-neutral-content">{next.label}</span>
          </span>
          <span className="text-4xl font-thin flex items-center">❯</span>
        </a>
      ) : (
        <span />
      )}
    </div>
  )
}



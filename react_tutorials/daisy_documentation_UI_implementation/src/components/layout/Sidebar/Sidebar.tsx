/**
 * Sidebar component - Documentation navigation sidebar
 * Generic recursive navigation supporting up to 3 levels
 * Logo appears at top when drawer is open (desktop)
 */

import { useState } from 'react'
import { sidebarNavigation, type NavItem } from '@/data/navigation'
import { Logo } from '@/components/ui'

export function Sidebar() {
  // Initialize expanded sections with defaults (using title as unique identifier)
  const defaultExpanded = sidebarNavigation
    .filter((item) => item.defaultExpanded)
    .map((item) => item.title)
  
  const [expandedSections, setExpandedSections] = useState<string[]>(defaultExpanded)
  const [activeItem, setActiveItem] = useState('/components/button')

  /**
   * Toggles expansion state of a section
   */
  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionTitle)
        ? prev.filter((s) => s !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  /**
   * Get indentation class based on level
   */
  const getIndentClass = (level: number): string => {
    const indentMap: Record<number, string> = { 1: '', 2: 'ml-4', 3: 'ml-8' }
    return indentMap[level] || ''
  }

  /**
   * Get text color class based on level
   */
  const getTextColorClass = (level: number, isClickable: boolean): string => {
    if (isClickable) return 'text-base-content hover:bg-base-300'
    
    if (level === 1) return 'text-base-content hover:text-base-content'
    if (level === 2) return 'text-base-content/60 font-medium'
    return 'text-base-content'
  }

  /**
   * Get tag styling class - always returns the basic tag style regardless of type or clickable
   * Includes background color that persists on parent hover using !important
   */
  const getTagClass = (_tag: string | undefined, _isClickable: boolean): string => {
    if (!_tag) return ''
    return 'text-xs px-1.5 py-1 rounded-xl border border-base-300 !bg-base-100 !text-base-content'
  }

  /**
   * Render common content (icon, title, tag) for navigation items
   */
  const renderItemContent = (item: NavItem, isClickable: boolean) => (
    <>
      {item.icon && <span>{item.icon}</span>}
      <span className="flex-1 text-left">{item.title}</span>
      {item.tag && (
        <span className={getTagClass(item.tag, isClickable)}>
          {item.tag}
        </span>
      )}
    </>
  )

  /**
   * Generic recursive renderer for navigation items
   * Handles all 3 levels with proper indentation based on depth
   */
  const renderNavItem = (item: NavItem, level: number = 1, isLastChild: boolean = false): JSX.Element => {
    const isExpanded = expandedSections.includes(item.title)
    const hasChildren = item.children && item.children.length > 0
    const isClickable = !!item.path
    const isActive = item.path && activeItem === item.path
    const indentClass = getIndentClass(level)
    const showVerticalLine = hasChildren && (level === 1 || level === 2)
    const shouldRenderChildren = hasChildren && (level !== 1 || isExpanded)
    // Hide line only for level-1 last children, not for level-2
    const shouldHideLine = isLastChild && level === 1

    return (
      <div key={item.path || item.title} className="relative">
        {/* Vertical line for L1 and L2 items with children */}
        {showVerticalLine && (
          <div 
            className={`absolute w-px bg-base-300 ${
              level === 1 ? 'left-3' : 'left-7'
            }`}
            style={{ 
              top: '2rem',
              height: shouldHideLine ? '0' : 'calc(100% - 2rem)'
            }}
          />
        )}

        {/* Render the item itself */}
        {isClickable ? (
          <a
            href={item.path!}
            onClick={(e) => {
              e.preventDefault()
              setActiveItem(item.path!)
            }}
            className={`flex items-center justify-start gap-2 px-3 py-1.5 text-sm text-left rounded-sm transition-colors ${indentClass} ${
              isActive && !hasChildren
                ? 'bg-neutral text-neutral-content font-medium'
                : getTextColorClass(level, true)
            }`}
          >
            {renderItemContent(item, true)}
          </a>
        ) : (
          <button
            onClick={() => hasChildren && level === 1 && toggleSection(item.title)}
            className={`flex items-center justify-start gap-2 w-full px-3 py-1.5 text-sm text-left ${indentClass} ${getTextColorClass(level, false)} ${
              hasChildren && level === 1 ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {renderItemContent(item, false)}
            {hasChildren && level === 1 && (
              <svg
                className={`w-4 h-4 ml-auto transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
        )}

        {/* Recursively render children when expanded (for level 1) or always (for level 2+) */}
        {shouldRenderChildren && (
          <div>
            {item.children!.map((child, index) => 
              renderNavItem(child, level + 1, index === item.children!.length - 1)
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside className="min-h-full w-80 bg-base-100 border-r border-base-300">
      {/* Logo Section - shows when drawer is open (desktop) */}
      <div className="navbar border-b border-base-300 sticky top-0 z-50 backdrop-blur bg-base-100/95">
        <Logo />
      </div>

      <div className="p-4">
        {/* Generic recursive navigation - handles all levels uniformly */}
        {sidebarNavigation.map((item, index) => 
          renderNavItem(item, 1, index === sidebarNavigation.length - 1)
        )}
      </div>
    </aside>
  )
}


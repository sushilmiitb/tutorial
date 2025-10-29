/**
 * Logo component - DaisyUI branding with version
 * Reusable across navbar and sidebar
 * Includes version dropdown menu
 */

import { versionItems, currentVersion } from '@/data/versions'

interface LogoProps {
    className?: string
    showVersion?: boolean
}

export function Logo({ className = '', showVersion = true }: LogoProps) {
    return (
        <div className="flex items-center gap-4">
            <a href="/" className={`flex items-center gap-2 ${className}`}>
                <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                </div>
                <div className="text-2xl font-bold">demoUI</div>
            </a>
            {showVersion && (
                <div className="dropdown dropdown-bottom dropdown-start">
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center gap-1 link link-hover text-xs text-base-content/60 cursor-pointer"
                    >
                        {currentVersion}
                        <svg className="w-3 h-3 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-100 w-36 p-2 shadow-lg border border-base-300 my-2"
                    >
                        {versionItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-xs">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}


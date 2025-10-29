/**
 * Version history data
 * List of available versions for the version dropdown
 */

export interface VersionItem {
  label: string
  href: string
}

export const versionItems: VersionItem[] = [
  { label: 'Changelog', href: '/' },
  { label: 'v5 release notes', href: '/' },
  { label: 'Version 4.x', href: '/' },
  { label: 'Version 3.x', href: '/' },
  { label: 'Version 2.x', href: '/' },
  { label: 'Version 1.x', href: '/' },
  { label: 'Roadmap', href: '/' },
]

export const currentVersion = '5.3.10'


/**
 * Navigation data structure for sidebar
 * Generic recursive structure supporting up to 3 levels
 */

import { ReactNode, createElement } from 'react'
import {
  BookOpenIcon,
  Cog6ToothIcon,
  BoltIcon,
  ChartBarIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  PencilIcon,
  Squares2X2Icon,
  ComputerDesktopIcon,
  PaintBrushIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  CommandLineIcon,
  CodeBracketIcon,
  HeartIcon,
  UserIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

export interface NavItem {
  title: string
  path?: string // Optional - if not provided, renders as non-clickable heading
  icon?: ReactNode // Heroicon component or emoji
  tag?: 'new' | 'updated'
  defaultExpanded?: boolean // Only meaningful for level 1
  children?: NavItem[] // Recursive children (can go 3 levels deep)
}

export const sidebarNavigation: NavItem[] = [
  {
    title: 'Docs',
    icon: createElement(BookOpenIcon),
    defaultExpanded: true,
    children: [
      { title: 'Introduction', path: '/docs/introduction' },
      { title: 'Install', path: '/docs/install' },
      { title: 'CDN', path: '/docs/cdn' },
      { title: 'Use', path: '/docs/use' },
      { title: 'Code editor & LLM setup', path: '/docs/code-editor', tag: 'updated' },
      { title: 'v5 upgrade guide', path: '/docs/v5-upgrade' },
      { title: 'Customize', path: '/docs/customize' },
      { title: 'Config', path: '/docs/config' },
      { title: 'Colors', path: '/docs/colors' },
      { title: 'Themes', path: '/docs/themes' },
      { title: 'Base style', path: '/docs/base-style' },
      { title: 'Utilities & variables', path: '/docs/utilities' },
      { title: 'Layout & Typography', path: '/docs/layout-typography' },
    ],
  },
  {
    title: 'Components',
    icon: createElement(Cog6ToothIcon),
    defaultExpanded: true,
    children: [
      {
        title: 'Actions',
        icon: createElement(BoltIcon),
        children: [
          { title: 'Button', path: '/components/button' },
          { title: 'Dropdown', path: '/components/dropdown' },
          { title: 'FAB / Speed Dial', path: '/components/fab', tag: 'new' },
          { title: 'Modal', path: '/components/modal' },
          { title: 'Swap', path: '/components/swap' },
          { title: 'Theme Controller', path: '/components/theme-controller' },
        ],
      },
      {
        title: 'Data display',
        icon: createElement(ChartBarIcon),
        children: [
          { title: 'Accordion', path: '/components/accordion' },
          { title: 'Avatar', path: '/components/avatar' },
          { title: 'Badge', path: '/components/badge' },
          { title: 'Card', path: '/components/card' },
          { title: 'Carousel', path: '/components/carousel' },
          { title: 'Chat bubble', path: '/components/chat' },
          { title: 'Collapse', path: '/components/collapse' },
          { title: 'Countdown', path: '/components/countdown', tag: 'updated' },
          { title: 'Diff', path: '/components/diff' },
          { title: 'Hover Gallery', path: '/components/hover-gallery', tag: 'new' },
          { title: 'Kbd', path: '/components/kbd' },
          { title: 'List', path: '/components/list' },
          { title: 'Stat', path: '/components/stat' },
          { title: 'Status', path: '/components/status' },
          { title: 'Table', path: '/components/table' },
          { title: 'Timeline', path: '/components/timeline' },
        ],
      },
      {
        title: 'Navigation',
        icon: createElement(MapIcon),
        children: [
          { title: 'Breadcrumbs', path: '/components/breadcrumbs' },
          { title: 'Dock', path: '/components/dock' },
          { title: 'Link', path: '/components/link' },
          { title: 'Menu', path: '/components/menu' },
          { title: 'Navbar', path: '/components/navbar' },
          { title: 'Pagination', path: '/components/pagination' },
          { title: 'Steps', path: '/components/steps' },
          { title: 'Tab', path: '/components/tab' },
        ],
      },
      {
        title: 'Feedback',
        icon: createElement(ChatBubbleLeftRightIcon),
        children: [
          { title: 'Alert', path: '/components/alert' },
          { title: 'Loading', path: '/components/loading' },
          { title: 'Progress', path: '/components/progress' },
          { title: 'Radial progress', path: '/components/radial-progress' },
          { title: 'Skeleton', path: '/components/skeleton' },
          { title: 'Toast', path: '/components/toast' },
          { title: 'Tooltip', path: '/components/tooltip' },
        ],
      },
      {
        title: 'Data input',
        icon: createElement(PencilIcon),
        children: [
          { title: 'Calendar', path: '/components/calendar' },
          { title: 'Checkbox', path: '/components/checkbox' },
          { title: 'Fieldset', path: '/components/fieldset' },
          { title: 'File Input', path: '/components/file-input' },
          { title: 'Filter', path: '/components/filter' },
          { title: 'Label', path: '/components/label' },
          { title: 'Radio', path: '/components/radio' },
          { title: 'Range', path: '/components/range' },
          { title: 'Rating', path: '/components/rating' },
          { title: 'Select', path: '/components/select', tag: 'updated' },
          { title: 'Input field', path: '/components/input' },
          { title: 'Textarea', path: '/components/textarea' },
          { title: 'Toggle', path: '/components/toggle' },
          { title: 'Validator', path: '/components/validator' },
        ],
      },
      {
        title: 'Layout',
        icon: createElement(Squares2X2Icon),
        children: [
          { title: 'Divider', path: '/components/divider' },
          { title: 'Drawer sidebar', path: '/components/drawer', tag: 'updated' },
          { title: 'Footer', path: '/components/footer' },
          { title: 'Hero', path: '/components/hero' },
          { title: 'Indicator', path: '/components/indicator' },
          { title: 'Join (group items)', path: '/components/join' },
          { title: 'Mask', path: '/components/mask' },
          { title: 'Stack', path: '/components/stack' },
        ],
      },
      {
        title: 'Mockup',
        icon: createElement(ComputerDesktopIcon),
        children: [
          { title: 'Browser', path: '/components/browser-mockup' },
          { title: 'Code', path: '/components/code-mockup' },
          { title: 'Phone', path: '/components/phone-mockup' },
          { title: 'Window', path: '/components/window-mockup' },
        ],
      },
    ],
  },
  {
    title: 'Theme Generator',
    icon: createElement(PaintBrushIcon),
    path: '/theme-generator',
  },
  {
    title: 'Store',
    icon: createElement(ShoppingCartIcon),
    path: '/store',
    tag: 'updated',
  },
  {
    title: 'Blog',
    icon: createElement(DocumentTextIcon),
    path: '/blog',
  },
  {
    title: 'Resources',
    icon: createElement(AcademicCapIcon),
    path: '/resources',
  },
  {
    title: 'Playground',
    icon: createElement(CommandLineIcon),
    path: '/playground',
  },
  {
    title: 'GitHub',
    icon: createElement(CodeBracketIcon),
    path: '/github',
  },
  {
    title: 'Discord',
    icon: createElement(ChatBubbleLeftRightIcon),
    path: '/discord',
  },
  {
    title: 'Support daisyUI',
    icon: createElement(HeartIcon),
    path: '/support',
  },
  {
    title: 'T-shirts',
    icon: createElement(UserIcon),
    path: '/tshirts',
    tag: 'new',
  },
  {
    title: 'llms.txt',
    icon: createElement(CpuChipIcon),
    path: '/llms-txt',
    tag: 'updated',
  },
]

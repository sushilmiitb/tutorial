/**
 * Main App component
 * Root component that provides layout structure with drawer sidebar
 */

import { useState } from 'react'
import { Header, Footer, Sidebar } from '@/components/layout'
import { HomePage, AboutPage, DashboardPage, NotFoundPage } from '@/pages'
import './App.css'

type Page = 'home' | 'about' | 'dashboard' | '404'

function App() {
  // Simple client-side routing state
  const [currentPage, setCurrentPage] = useState<Page>('home')

  // Listen for custom navigation events
  useState(() => {
    const handleNavigation = (event: Event) => {
      const customEvent = event as CustomEvent<{ page: Page }>
      setCurrentPage(customEvent.detail.page)
    }

    window.addEventListener('navigate', handleNavigation)
    return () => window.removeEventListener('navigate', handleNavigation)
  })

  // Intercept anchor clicks for simple routing
  useState(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault()
        const path = anchor.pathname
        
        if (path === '/') setCurrentPage('home')
        else if (path === '/about') setCurrentPage('about')
        else if (path === '/dashboard') setCurrentPage('dashboard')
        else setCurrentPage('404')
        
        window.history.pushState({}, '', path)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  })

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'dashboard':
        return <DashboardPage />
      case '404':
        return <NotFoundPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content */}
        <Header />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  )
}

export default App

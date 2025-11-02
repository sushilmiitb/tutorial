/**
 * Main App component
 * Documentation-style layout with drawer sidebar
 */

import { useState } from 'react'
import { Header, Footer, Sidebar, RightSidebar } from '@/components/layout'
import { HomePage, AboutPage, DashboardPage, NotFoundPage, ComponentPage, IntroductionPage, InstallPage } from '@/pages'
import './App.css'

type Page = 'home' | 'about' | 'dashboard' | 'components' | 'introduction' | 'install' | '404'

function App() {
  // Simple client-side routing state
  const [currentPage, setCurrentPage] = useState<Page>('introduction')

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
        else if (path === '/introduction' || path === '/intro' || path === '/docs/introduction' || path.startsWith('/introduction')) setCurrentPage('introduction')
        else if (path === '/install' || path === '/docs/install') setCurrentPage('install')
        else if (path.startsWith('/components')) setCurrentPage('components')
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
      case 'components':
        return <ComponentPage />
      case 'introduction':
        return <IntroductionPage />
      case 'install':
        return <InstallPage />
      case '404':
        return <NotFoundPage />
      default:
        return <IntroductionPage />
    }
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Header */}
        <Header />
        
        {/* Main Layout with Right Sidebar */}
        <div className="flex flex-1">
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {renderPage()}
          </main>
          
          {/* Right Sidebar */}
          <RightSidebar />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Left Drawer Sidebar */}
      <div className="drawer-side">
        <label htmlFor="main-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  )
}

export default App

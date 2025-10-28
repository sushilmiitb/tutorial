/**
 * 404 Not Found Page component
 */

import { Button } from '@/components/ui'

export function NotFoundPage() {
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={() => (window.location.href = '/')}>
              Go Home
            </Button>
            <Button variant="ghost" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


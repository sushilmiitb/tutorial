/**
 * Home Page component
 */

import { useState } from 'react'
import { Button, Card, Input } from '@/components/ui'

export function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-base-200 rounded-lg mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">Welcome! 👋</h1>
            <p className="text-lg mb-6">
              This is a production-ready React application with TypeScript, Vite, and DaisyUI
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card
          title="⚡ Lightning Fast"
          bordered
          actions={
            <Button variant="ghost" size="sm">
              Learn More
            </Button>
          }
        >
          <p>Built with Vite for instant hot module replacement and optimized builds.</p>
        </Card>

        <Card
          title="🎯 Type Safe"
          bordered
          actions={
            <Button variant="ghost" size="sm">
              Learn More
            </Button>
          }
        >
          <p>Full TypeScript support with strict mode for catching errors early.</p>
        </Card>

        <Card
          title="🎨 Beautiful UI"
          bordered
          actions={
            <Button variant="ghost" size="sm">
              Learn More
            </Button>
          }
        >
          <p>DaisyUI components with 21 themes and Tailwind CSS utilities.</p>
        </Card>
      </div>

      {/* Interactive Demo */}
      <Card title="Interactive Counter Demo" className="max-w-md mx-auto">
        <div className="text-center">
          <p className="text-4xl font-bold mb-4">{count}</p>
          <div className="flex gap-2 justify-center">
            <Button
              variant="secondary"
              onClick={() => setCount((c) => c - 1)}
            >
              Decrement
            </Button>
            <Button
              variant="accent"
              onClick={() => setCount(0)}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={() => setCount((c) => c + 1)}
            >
              Increment
            </Button>
          </div>
        </div>
      </Card>

      {/* Form Example */}
      <div className="max-w-md mx-auto mt-8">
        <Card title="Form Example">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            helperText="We'll never share your email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="mt-4"
          />
          <Button variant="primary" block className="mt-6">
            Submit
          </Button>
        </Card>
      </div>
    </div>
  )
}


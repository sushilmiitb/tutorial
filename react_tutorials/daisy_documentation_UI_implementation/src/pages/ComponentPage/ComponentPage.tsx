/**
 * Component Documentation Page
 * Displays component details with preview and code examples
 */

import { useState } from 'react'
import { Button, Card } from '@/components/ui'

interface ClassTableRow {
  className: string
  type: string
  description: string
  colorIcon?: boolean
}

const buttonClasses: ClassTableRow[] = [
  { className: 'btn', type: 'Component', description: 'Button' },
  { className: 'btn-neutral', type: 'Color', description: 'neutral color', colorIcon: true },
  { className: 'btn-primary', type: 'Color', description: 'primary color', colorIcon: true },
  { className: 'btn-secondary', type: 'Color', description: 'secondary color', colorIcon: true },
  { className: 'btn-accent', type: 'Color', description: 'accent color', colorIcon: true },
  { className: 'btn-info', type: 'Color', description: 'info color', colorIcon: true },
  { className: 'btn-success', type: 'Color', description: 'success color', colorIcon: true },
  { className: 'btn-warning', type: 'Color', description: 'warning color', colorIcon: true },
  { className: 'btn-error', type: 'Color', description: 'error color', colorIcon: true },
]

export function ComponentPage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'html' | 'jsx'>('preview')

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Button</h1>
        <p className="text-lg text-base-content/70">
          Buttons allow the user to take actions or make choices.
        </p>
      </div>

      {/* Class Name Table */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Class names</h2>
          <div className="dropdown dropdown-end">
            <button className="btn btn-sm gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy docs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Class name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {buttonClasses.map((row, index) => (
                <tr key={index}>
                  <td>
                    <code className="badge badge-ghost font-mono">{row.className}</code>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      {row.colorIcon && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 22a2 2 0 002 2h6a2 2 0 002-2V12H7v10zm9-15h3v10h-3V7zm-5 0h3v10h-3V7z"/>
                        </svg>
                      )}
                      <span>{row.type}</span>
                    </div>
                  </td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Examples Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6"># Button</h2>

        {/* Tabs */}
        <div role="tablist" className="tabs tabs-lifted mb-0">
          <button
            role="tab"
            className={`tab ${activeTab === 'preview' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            Preview
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'html' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            role="tab"
            className={`tab ${activeTab === 'jsx' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('jsx')}
          >
            JSX
          </button>
        </div>

        {/* Tab Content */}
        <Card className="rounded-tl-none">
          {activeTab === 'preview' && (
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="accent">Button</Button>
              <Button variant="neutral">Button</Button>
              <Button variant="ghost">Button</Button>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>&lt;button class="btn btn-primary"&gt;Button&lt;/button&gt;</code>
              </pre>
              <pre data-prefix="2">
                <code>&lt;button class="btn btn-secondary"&gt;Button&lt;/button&gt;</code>
              </pre>
              <pre data-prefix="3">
                <code>&lt;button class="btn btn-accent"&gt;Button&lt;/button&gt;</code>
              </pre>
            </div>
          )}

          {activeTab === 'jsx' && (
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>&lt;Button variant="primary"&gt;Button&lt;/Button&gt;</code>
              </pre>
              <pre data-prefix="2">
                <code>&lt;Button variant="secondary"&gt;Button&lt;/Button&gt;</code>
              </pre>
              <pre data-prefix="3">
                <code>&lt;Button variant="accent"&gt;Button&lt;/Button&gt;</code>
              </pre>
            </div>
          )}
        </Card>
      </div>

      {/* More Examples */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Button with brand colors</h3>
          <Card>
            <div className="flex flex-wrap gap-4">
              <Button variant="neutral">Neutral</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Button with state colors</h3>
          <Card>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Button sizes</h3>
          <Card>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" size="xs">Tiny</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Normal</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


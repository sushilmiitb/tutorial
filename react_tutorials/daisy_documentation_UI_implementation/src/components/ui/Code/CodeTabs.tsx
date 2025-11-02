/**
 * CodeTabs - DaisyUI tabs with code content and copy button
 */

import { useId, useState } from 'react'

export interface CodeLine {
  text: string
  prefix?: string
  className?: string
}

export interface CodeTabItem {
  label: string
  code: CodeLine[]
}

export interface CodeTabsProps {
  tabs: CodeTabItem[]
  className?: string
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="btn btn-xs btn-ghost absolute right-2 top-2"
      onClick={async (e) => {
        e.preventDefault()
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 1200)
        } catch {}
      }}
      aria-label="Copy code"
    >
      {copied ? '✓' : '📋'}
    </button>
  )
}

export function CodeTabs({ tabs, className = '' }: CodeTabsProps) {
  const group = useId().replace(/:/g, '-')

  const getFullCodeText = (lines: CodeLine[]) => {
    return lines.map(line => line.text).join('\n')
  }

  return (
    <div className={["tabs tabs-lifted", className].filter(Boolean).join(" ")}> 
      {tabs.map((tab, idx) => (
        <>
          <input
            key={`radio-${idx}`}
            type="radio"
            name={`code_tabs_${group}`}
            className="tab"
            aria-label={tab.label}
            defaultChecked={idx === 0} 
          />
          <div key={`panel-${idx}`} className="tab-content bg-base-100 border-base-300 p-0">
            <div className="mockup-code relative">
              <CopyButton text={getFullCodeText(tab.code)} />
              {tab.code.map((line, lineIdx) => (
                <pre key={lineIdx} data-prefix={line.prefix}>
                  <code className={line.className}>{line.text}</code>
                </pre>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export interface CodeBlockProps {
  code: string
  prefix?: string
  className?: string
}

export function CodeBlock({ code, prefix, className = '' }: CodeBlockProps) {
  const lines = code.split('\n')
  return (
    <div className={["mockup-code relative", className].filter(Boolean).join(" ")}> 
      <CopyButton text={code} />
      {lines.map((line, idx) => (
        <pre key={idx} data-prefix={idx === 0 ? prefix : undefined}><code>{line}</code></pre>
      ))}
    </div>
  )
}



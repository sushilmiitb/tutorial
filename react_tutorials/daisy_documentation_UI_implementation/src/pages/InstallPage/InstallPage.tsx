/**
 * Install Page component
 * Shows how to install daisyUI as a Tailwind plugin
 */

import { Section, Text, PageNav, CodeTabs } from '@/components/ui'

export function InstallPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">

            <Section>
                <Text style="h1">Install daisyUI as a Tailwind plugin</Text>
                <Text style="p">How to install daisyUI as a Tailwind CSS plugin?</Text>
                <Text style="p">
                    You need <strong><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer" className="link">Node.js</a></strong> and <strong><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="link">Tailwind CSS</a></strong> installed.
                </Text>

                <Text style="p">1. Install daisyUI as a Node package:</Text>
                <CodeTabs
                    className="mb-6"
                    tabs={[
                        { label: 'NPM', code: [{ text: 'npm i -D daisyui@latest', prefix: '$' }] },
                        { label: 'PNPM', code: [{ text: 'pnpm add -D daisyui@latest', prefix: '$' }] },
                        { label: 'Yarn', code: [{ text: 'yarn add -D daisyui@latest', prefix: '$' }] },
                        { label: 'Bun', code: [{ text: 'bun add -D daisyui@latest', prefix: '$' }] },
                    ]}
                />

                <Text style="p">2. Add daisyUI to your CSS:</Text>
                <CodeTabs
                    className="mb-6"
                    tabs={[
                        { 
                            label: 'app.css', 
                            code: [
                                { text: '@import "tailwindcss";', prefix: '$', className: 'text-gray-500' },
                                { text: '@plugin "daisyui";', prefix: '$', className: 'text-teal-300' }
                            ]
                        }
                    ]}
                />
            </Section>

            <PageNav
                prev={{ href: '/docs/introduction', label: 'Introduction' }}
                next={{ href: '/docs/cdn', label: 'CDN' }}
                className="mt-10"
            />
        </div>
    )
}



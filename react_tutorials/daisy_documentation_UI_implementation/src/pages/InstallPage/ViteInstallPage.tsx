/**
 * Vite Installation Page component
 * Shows how to install daisyUI with Vite
 */

import { Section, Text, PageNav, CodeBlock } from '@/components/ui'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function ViteInstallPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex flex-row p-4 rounded-lg bg-base-200 text-base-content">
                <figure>
                    <img
                        src="/images/framework_logos/Vitejs_logo.svg"
                        alt="Vite logo"
                        className="w-24 h-24 m-4"
                    />
                </figure>
                <div className="p-4">
                    <h2 className="ml-4 text-xl font-bold">Card title!</h2>
                    <span className="ml-4 justify-left">A card component has a figure, a body part, and inside body there are title and actions parts</span>
                    <div className="flex gap-2">
                        <a className="btn btn-ghost btn-sm flex items-center gap-2" href="https://vitejs.dev/">
                            <GlobeAltIcon className="h-4 w-4" />
                            Website
                        </a>
                        <a className="btn btn-ghost btn-sm flex items-center gap-2" href="https://github.com/vitejs/vite">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            Github
                        </a>
                    </div>
                    {/* <div className="card-actions justify-start">
                        <button className="btn btn-link">Website</button>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-link">Github</button>
                    </div> */}
                </div>
            </div>
            <Section>
                <Text style="h1">Install daisyUI for Vite</Text>

                <Text style="h2">1. Create a new Vite project</Text>
                <Text style="p">Create a new Vite project in the current directory</Text>
                <CodeBlock
                    code="npm create vite@latest ./ -- --template vanilla"
                    prefix="$"
                    filename="Terminal"
                    className="mb-6"
                />

                <Text style="h2">2. Install Tailwind CSS and daisyUI</Text>
                <CodeBlock
                    code="npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest"
                    prefix="$"
                    filename="Terminal"
                    className="mb-6"
                />

                <Text style="p">Add Tailwind CSS to Vite config</Text>
                <CodeBlock
                    code={`import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});`}
                    filename="vite.config.js"
                    className="mb-6"
                />

                <Text style="p">Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)</Text>
                <CodeBlock
                    code={`@import "tailwindcss";
@plugin "daisyui";`}
                    filename="src/style.css"
                    className="mb-6"
                />
                <Text style="p">
                    Now you can use daisyUI class names!
                </Text>
            </Section>

            <PageNav
                prev={{ href: '/docs/install', label: 'Install' }}
                next={{ href: '/docs/use', label: 'Use' }}
                className="mt-10"
            />
        </div>
    )
}

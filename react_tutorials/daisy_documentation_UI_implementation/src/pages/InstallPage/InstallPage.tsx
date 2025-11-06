/**
 * Install Page component
 * Shows how to install daisyUI as a Tailwind plugin
 */

import { Section, Text, PageNav, CodeTabs } from '@/components/ui'

/**
 * Framework data structure with logo mappings
 */
interface Framework {
    name: string
    logoPath: string | null
    url: string
}

/**
 * Helper function to get logo path for a framework
 */
function getFrameworkLogoPath(frameworkName: string): string | null {
    const logoMap: Record<string, string> = {
        'Vite': '/images/framework_logos/Vitejs_logo.svg',
        'Tailwind CSS CLI': '/images/framework_logos/Tailwind_CSS_Logo.svg',
        'Tailwind CSS Standalone without Node': '/images/framework_logos/Tailwind_CSS_Logo.svg',
        'Post CSS': '/images/framework_logos/Tailwind_CSS_Logo.svg',
        'SvelteKit': '/images/framework_logos/Svelte_logo.svg',
        'Astro': '/images/framework_logos/Astro_logo.svg',
        'React': '/images/framework_logos/React_logo.svg',
        'Laravel': '/images/framework_logos/Laravel_logo.svg',
        'Rails': '/images/framework_logos/Ruby_on_Rails_logo.svg',
        'Next.js': '/images/framework_logos/Nextjs_logo.svg',
        'Vue': '/images/framework_logos/Vue.js_logo.svg',
        'Nuxt': '/images/framework_logos/Nuxt_logo.svg',
        // 'Elixir Phoenix': null,
        // 'Django': null,
        'Electron': '/images/framework_logos/Electron_Software_Framework_Logo.svg',
        'Angular': '/images/framework_logos/Angular_logo.svg',
        // 'Solid': null,
        // 'Solid Start': null,
        // 'Qwik': null,
        // 'HTMX': null,
        'WordPress': '/images/framework_logos/WordPress_logo.svg',
        // 'Bun dev server': null,
        // 'Rsbuild': null,
        // 'Vike': null,
        'React Router': '/images/framework_logos/React_logo.svg',
        // 'Elysia': null,
        // 'Deno Fresh': null,
        // 'Lit': null,
        // 'UnoCSS': null,
        // 'Eleventy': null,
        // 'Waku': null,
        // 'Zola': null,
        // 'Ember': null,
        // 'Preact': null,
        // 'Dioxus': null,
        // 'Yew': null,
    }
    return logoMap[frameworkName] || null
}

/**
 * Framework list
 */
const frameworks: Framework[] = [
    'Vite',
    'Tailwind CSS CLI',
    'Tailwind CSS Standalone without Node',
    'Post CSS',
    'SvelteKit',
    'Astro',
    'React',
    'Laravel',
    'Rails',
    'Next.js',
    'Vue',
    'Nuxt',
    // 'Elixir Phoenix', // no logo
    // 'Django', // no logo
    'Electron',
    'Angular',
    // 'Solid', // no logo
    // 'Solid Start', // no logo
    // 'Qwik', // no logo
    // 'HTMX', // no logo
    'WordPress',
    // 'Bun dev server', // no logo
    // 'Rsbuild', // no logo
    // 'Vike', // no logo
    'React Router',
    // 'Elysia', // no logo
    // 'Deno Fresh', // no logo
    // 'Lit', // no logo
    // 'UnoCSS', // no logo
    // 'Eleventy', // no logo
    // 'Waku', // no logo
    // 'Zola', // no logo
    // 'Ember', // no logo
    // 'Preact', // no logo
    // 'Dioxus', // no logo
    // 'Yew', // no logo
].map(name => ({
    name,
    logoPath: getFrameworkLogoPath(name),
    url: name === 'Vite' ? '/docs/install/vite' : '#', // Update URLs as installation pages are created
}))

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

            {/* Framework Integration Grid */}
            <Section className="mt-12">
                <Text style="h2">Framework install tutorials</Text>
                <Text style="p">See example setup of daisyUI and Tailwind CSS on different frameworks and build tools.</Text>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {frameworks.map((framework) => (
                        <a
                            key={framework.name}
                            href={framework.url}
                            className="card bg-base-100 border border-base-300 hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-105"
                        >
                            <div className="card-body items-center text-center p-4">
                                {/* Only render logo image if there is a logoPath; the code for null logos is commented out below */}
                                {framework.logoPath ? (
                                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                                        <img
                                            src={framework.logoPath}
                                            alt={`${framework.name} logo`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                ) : (
                                    // <div className="w-12 h-12 mb-3 flex items-center justify-center bg-base-200 rounded-lg">
                                    //     <span className="text-2xl">📦</span>
                                    // </div>
                                    null
                                )}
                                <h3 className="card-title text-base justify-center">{framework.name}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </Section>

            <PageNav
                prev={{ href: '/docs/introduction', label: 'Introduction' }}
                next={{ href: '/docs/cdn', label: 'CDN' }}
                className="mt-10"
            />
        </div>
    )
}



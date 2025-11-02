/**
 * Introduction Page component
 * Displays information about daisyUI, its purpose, and benefits
 */

import { Section, Text, PageNav } from '../../components/ui'

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-inside space-y-2 mb-6 text-base-content/90 ml-4">
      {children}
    </ul>
  )
}

/**
 * Using Text style="li" instead of a local ListItem component
 */

export function IntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Page Title */}
      <div className="mb-8">
        <Text style="h1" className="mb-2">Introduction</Text>
        <Text style="p">What is daisyUI and why should you use it?</Text>
      </div>

      {/* Hero Section with Logo */}
      <Section>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex gap-1">
            <div className="w-8 h-8 rounded-full bg-warning"></div>
            <div className="w-8 h-8 rounded-full bg-warning"></div>
          </div>
        </div>
        
        <Text style="h2">What is daisyUI?</Text>
        <Text style="p">
          daisyUI is a collection of CSS class names.<br />
          These class names are a high-level abstraction of Tailwind CSS utility classes.<br />
          Imagine you use Tailwind CSS with superpowers!
        </Text>
      </Section>

      {/* How does daisyUI work? */}
      <Section>
        <Text style="h2">How does daisyUI work?</Text>
        <Text style="p">daisyUI is a NPM package, you can install it as a dev dependency in your project. 
          <br />Then you add it to Tailwind CSS as a plugin.
          <br />This makes all the daisyUI class names available to Tailwind CSS and you can use them like any other Tailwind CSS class names.  
        </Text>
        <Text style="p">daisyUI uses the Tailwind CSS plugin API to extend the available Tailwind CSS class names. This means that daisyUI is fully compatible with Tailwind CSS and you can use it with any Tailwind CSS project.</Text>
      </Section>

      {/* Why should I use daisyUI? */}
      <Section>
        <Text style="h2">Why should I use daisyUI?</Text>
        
        <Text style="p"><strong>daisyUI is for you if you:</strong></Text>
        <List>
          <Text style="li">Are tired of writing thousands of utility class names repeatedly</Text>
          <Text style="li">Want more readable and maintainable code</Text>
          <Text style="li">Need to design interfaces faster with less code</Text>
          <Text style="li">Want a consistent design system across projects</Text>
          <Text style="li">Want to use standard UI parts, without making design decisions for every single detail</Text>
          <Text style="li">Want dark mode and many other themes available out of the box</Text>
          <Text style="li">Want to use a design system that is based on real-world UI design principles</Text>
          <Text style="li">Want development speed and customization at the same time</Text>
        </List>

        <Text style="p"><strong>daisyUI is not for you if you:</strong></Text>
        <List>
          <Text style="li">Want to waste time re-inventing all the standard UI parts like buttons, cards, checkboxes, etc, for each project.</Text>
          <Text style="li">Want to swim in the ocean of thousands of class names and never find your way out.</Text>
          <Text style="li">Want to make your codebase a mess and spend hours figuring out what part of the code is responsible for what part of the UI.</Text>
          <Text style="li">Want to waste your time and money re-inventing the wheel instead of shipping your actual project.</Text>
        </List>
      </Section>

      {/* What's the difference between daisyUI and Tailwind CSS? */}
      <Section>
        <Text style="h2">What's the difference between daisyUI and Tailwind CSS?</Text>
        <Text style="p">Tailwind CSS provides low-level utility classes, which usually include only one CSS rule.</Text>
        <Text style="p">daisyUI classes are a combination of multiple CSS rule that are named semantically for each part of the UI.</Text>
        <Text style="p">For example Tailwind CSS class names decide if padding should be 4px or 8px. daisyUI class names decide if a HTML element should look like a card, a button, a toggle, etc, just like what we would call them semantically in a design system.</Text>
        <Text style="p">This makes it easier to design interfaces with less code and more consistency. For example if you want to make a card using Tailwind CSS you would have to write one or multiple utility class names for each single CSS rule. Doing this over and over again for each element, for each page, for each project is time consuming and hard to manage. It also makes it harder to maintain your code as you have to always figure out what part of the code is responsible for what part of the UI.</Text>
        <Text style="p">daisyUI solves this problem by providing higher level class names that are named based on the UI parts. For example to make a card, we simply use the card class name and daisyUI gives you all the necessary CSS rules to make a card. Then if you need additional customization, you can add Tailwind CSS utility classes to the element to make it look the way you want.</Text>
        <Text style="p">daisyUI is not a replacement for Tailwind CSS, it's a plugin that makes Tailwind CSS more powerful and easier to use.</Text>
      </Section>

      {/* Is daisyUI aligned with Tailwind CSS' utility-first philosophy? */}
      <Section>
        <Text style="h2">Is daisyUI aligned with Tailwind CSS' utility-first philosophy?</Text>
        <Text style="p"><strong>Yes! It's utility-first, not utility-only.</strong></Text>
        <Text style="p">
          daisyUI is built on top of Tailwind CSS's component API.<br/>
          Tailwind CSS as a library provides utility classes and suggests using utility classes for maximum flexibility and customization.<br/>
          However that's means slower development and more code to write.<br/>
          That's why many people find it hard to use Tailwind CSS for designing interfaces.<br/>
          It takes a professional designer to make design decisions for many details of the UI to make them look good.<br/>
          It also takes a lot of time to write all the utility class names for each part of the UI.<br/>
          Even copying and pasting those huge chunks of utility class names is not helpful, as it makes the codebase hard to read and maintain.
        </Text>
        <Text style="p">
          Imagine one side of the spectrum is maximum customization and flexibility and you should make design decisions for every single detail.<br />
          On the other side of the spectrum is maximum development speed and less code to write, but you have no control over the design. daisyUI and Tailwind CSS together give you the best of both worlds.<br />
          Use daisyUI class names to write less code and develop faster, and use Tailwind CSS utility classes to customize the design when you need to.
        </Text>
        <Text style="p">
          Is it full circle?<br/>
          If you've been using Bootstrap many years ago, you may think it doesn't make sense to go back to using components.
        </Text>
        <Text style="p">
          But here's the catch: The problem with Bootstrap was not class names! Bootstrap class names were actually really fast to work with.<br/>
          The problem was lack of customization and flexibility.<br/>
          At some point every Bootstrap website looked the same unless you open a CSS file and write tons of custom CSS.<br/>
          Tailwind CSS solves this problem of customization and flexibility but the cost is slower development and more code to write! You wanted customization and flexibility? Good luck making design decisions for every single pixel in your page! Not a practical approach, right?
        </Text>
        <Text style="p">We need customization development speed at the same time. daisyUI is here to make this possible.</Text>
      </Section>

      {/* How does daisyUI fit in Atomic Design principles? */}
      <Section>
        <Text style="h2">How does daisyUI fit in Atomic Design principles?</Text>
        <Text style="p">Atomic Design is a methodology for creating design systems. It breaks down the UI into smaller parts, like atoms, molecules, organisms, etc.</Text>
        <Text style="p">You can think of Tailwind CSS utility classes as atoms. They are the smallest parts of the UI that you can use to build larger parts. daisyUI classes are like molecules and organisms. They are higher-level abstractions of the UI parts that are made of atoms.</Text>
        <Text style="p">Larger parts of the UI, like templates and pages are quickly possible by putting these molecules and organisms together in layouts, using grid or flexbox, and adding functionality and content to them.</Text>
      </Section>

      {/* Is daisyUI free? */}
      <Section>
        <Text style="h2">Is daisyUI free?</Text>
        <Text style="p">Yes, daisyUI is free and open-source, under the MIT license. You can use it in any project, commercial or non-commercial, without any restrictions.</Text>
        <Text style="p">Why is it free? daisyUI's goal is to improve the web development experience for everyone. I believe web development is already complex enough with all the different technologies, frameworks and tools. It takes a lot of time and effort to learn and master all these tools. daisyUI is here to make the design part of web development easier and faster, so you can focus on the actual product you are building.</Text>
      </Section>

      {/* How can I support daisyUI? */}
      <Section>
        <Text style="h2">How can I support daisyUI?</Text>
        <Text style="p">You can support daisyUI by using it in your projects, sharing it with your friends and colleagues, and contributing to the project on GitHub. You can also support daisyUI by becoming a sponsor on GitHub or Open Collective.</Text>
      </Section>

      {/* Can I use daisyUI without Tailwind CSS? */}
      <Section>
        <Text style="h2">Can I use daisyUI without Tailwind CSS?</Text>
        <Text style="p">
          Yes, daisyUI can be used standalone without Tailwind CSS.<br/>
          However, it's recommended to use daisyUI with Tailwind CSS.<br/>
          Here's why:<br/>
          daisyUI provides pieces of UI you can use to make a website.<br/>
          Like Button, Toggle, Card, etc.<br/>
          You need something to glue these pieces together! For example you need flex box, grid, padding, margin, etc.<br/>
          Tailwind CSS provides these low-level utility classes that you can use to glue the UI pieces together.<br/>
          So daisyUI and Tailwind CSS are a perfect match.<br/>
          You can use daisyUI to design the UI parts and Tailwind CSS for layout, spacing, font-size and other low-level CSS rules.
        </Text>
        <Text style="p">Alternatively if you don't want to use Tailwind CSS, you can use daisyUI for components and write your own styles for layout, spacing, etc.</Text>
      </Section>

      {/* Can I use daisyUI with other UI frameworks? */}
      <Section>
        <Text style="h2">Can I use daisyUI with other UI frameworks?</Text>
        <Text style="p">Yes, you can mix and match daisyUI with any UI framework that add styles based on class names. If there's any class name conflict, you can use prefix to avoid conflicts between two libraries.</Text>
      </Section>

      {/* Which frameworks can I use daisyUI with? */}
      <Section>
        <Text style="h2">Which frameworks can I use daisyUI with?</Text>
        <Text style="p">ALL of them! daisyUI is framework agnostic. You can use it anywhere you can use CSS.</Text>
      </Section>

      {/* Page navigation */}
      <PageNav
        next={{ href: '/docs/install', label: 'Install' }}
        className="mt-10"
      />
    </div>
  )
}


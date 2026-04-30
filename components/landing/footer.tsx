import Link from 'next/link'
import { Zap, X, Share2, Rss } from 'lucide-react'

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookie policy', href: '#' },
    { label: 'Licenses', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <Zap className="h-5 w-5 text-primary" />
              Launchpad
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The platform that helps teams build and ship products faster.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="X / Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </a>
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" aria-label="RSS" className="text-muted-foreground hover:text-foreground transition-colors">
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Launchpad, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js and Supabase
          </p>
        </div>
      </div>
    </footer>
  )
}

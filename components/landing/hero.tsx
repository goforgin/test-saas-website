import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Launching something great
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Build faster,{' '}
              <span className="text-primary">ship smarter</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              The all-in-one platform that helps your team move from idea to production in record time. Less boilerplate, more impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Get started free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  See how it works
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required · Free plan forever
            </p>
          </div>

          <div className="relative lg:block">
            <div className="relative rounded-2xl border bg-muted/30 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="relative space-y-3">
                {['Authentication', 'Database', 'Storage', 'Edge Functions', 'Realtime'].map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-lg border bg-background/80 px-4 py-3 text-sm font-medium"
                    style={{ marginLeft: `${i * 8}px` }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

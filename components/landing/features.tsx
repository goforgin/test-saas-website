import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Globe, BarChart, Users, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy globally in seconds. Edge-optimized infrastructure ensures sub-100ms response times worldwide.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2 compliant with end-to-end encryption, audit logs, and role-based access controls built in.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Automatically scales to handle millions of users. No infrastructure management required.',
  },
  {
    icon: BarChart,
    title: 'Real-time Analytics',
    description: 'Understand your users with built-in dashboards, funnels, and retention charts.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, comments, and version history.',
  },
  {
    icon: Lock,
    title: 'Auth & Permissions',
    description: 'Full authentication suite with social logins, SSO, and fine-grained permission controls.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to ship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop stitching together dozens of tools. Get everything in one platform that just works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border bg-background">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

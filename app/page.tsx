import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="ResumeAI Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">ResumeAI</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:underline underline-offset-4">
              Templates
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Build Your Perfect Resume with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create professional resumes in minutes with our AI-powered resume builder. Choose from beautiful
                    templates and let AI enhance your content.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#templates">
                    <Button size="lg" variant="outline">
                      View Templates
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Resume Builder Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful AI Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our AI-powered resume builder helps you create professional resumes that stand out to employers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Templates</h3>
                <p className="text-center text-muted-foreground">
                  Choose from professionally designed templates optimized for ATS systems.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Content Enhancement</h3>
                <p className="text-center text-muted-foreground">
                  Let AI improve your resume content with professional wording and formatting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Import Existing Resumes</h3>
                <p className="text-center text-muted-foreground">
                  Paste your existing resume and let AI transform it into a new template.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailored Questions</h3>
                <p className="text-center text-muted-foreground">
                  Answer template-specific questions to create a perfectly tailored resume.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Multiple Export Options</h3>
                <p className="text-center text-muted-foreground">
                  Download your resume as PDF, DOCX, or share a link directly with employers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">ATS Optimization</h3>
                <p className="text-center text-muted-foreground">
                  AI ensures your resume passes through Applicant Tracking Systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="templates" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Templates</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose from our collection of professionally designed resume templates.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border bg-background">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Template%20${i}`}
                    alt={`Resume Template ${i}`}
                    width={300}
                    height={400}
                    className="aspect-[3/4] object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Template {i}</h3>
                      <Button size="sm" variant="secondary">
                        Use This Template
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/signup">
                <Button size="lg">Get Started with Any Template</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that works best for your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Basic resume creation</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>1 resume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>PDF download</span>
                  </li>
                </ul>
                <Link href="/signup" className="mt-8">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-lg ring-2 ring-primary">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Advanced resume features</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $9.99
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Unlimited resumes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>All templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>AI content enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Multiple export formats</span>
                  </li>
                </ul>
                <Link href="/signup" className="mt-8">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For teams and businesses</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $29.99
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link href="/signup" className="mt-8">
                  <Button className="w-full">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to build your perfect resume?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume
                builder.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/signup">
                <Button size="lg" className="w-full">
                  Get Started for Free
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">
                No credit card required. Start building your resume today.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


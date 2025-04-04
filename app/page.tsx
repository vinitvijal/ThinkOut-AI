import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Sparkles, MessageSquare, Mail, FileText } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <header className="sticky flex justify-center top-0 z-50 w-full border-b border-gray-700  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#7c3aed]" />
            <span className="text-xl font-bold">ThinkOut AI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#models" className="text-sm font-medium hover:underline underline-offset-4">
              Models
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="sm" className="bg-[#7c3aed]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center flex-col">
        <section className="container py-24 space-y-8 md:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your <span className="text-[#7c3aed]">Voice</span> & <span className="text-[#7c3aed]">Text</span>{" "}
              Into Professional Content
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Create LinkedIn posts, emails, articles, and more with the power of AI. Multiple models, one seamless
              experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="h-10 px-6 bg-[#7c3aed] text-white hover:bg-[#6b21a8]">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="container py-16 space-y-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Everything you need to create professional content in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
              <div className="rounded-full bg-[#7c3aed]/10 p-4">
                <Mic className="h-6 w-6 text-[#7c3aed]" />
              </div>
              <h3 className="text-xl font-bold">Voice to Text</h3>
              <p className="text-center text-muted-foreground">
                Speak naturally and watch as your words transform into professional content.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
              <div className="rounded-full bg-[#7c3aed]/10 p-4">
                <MessageSquare className="h-6 w-6 text-[#7c3aed]" />
              </div>
              <h3 className="text-xl font-bold">LinkedIn Posts</h3>
              <p className="text-center text-muted-foreground">
                Create engaging LinkedIn content that stands out in your network.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
              <div className="rounded-full bg-[#7c3aed]/10 p-4">
                <Mail className="h-6 w-6 text-[#7c3aed]" />
              </div>
              <h3 className="text-xl font-bold">Professional Emails</h3>
              <p className="text-center text-muted-foreground">
                Draft perfect emails for any situation with customizable styles.
              </p>
            </div>
          </div>
        </section>

        <section id="models" className="container py-16 space-y-16  rounded-lg">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Multiple AI Models</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose from the best AI models for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {["GPT-4o", "GPT-4o Mini", "Gemini", "Grok"].map((model) => (
              <div
                key={model}
                className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 bg-zinc-800/90 p-6 shadow-sm"
              >
                <FileText className="h-6 w-6 text-[#7c3aed]" />
                <h3 className="text-lg font-bold">{model}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-700 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#7c3aed]" />
            <span className="text-lg font-semibold">ThinkOut AI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 ThinkOut AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


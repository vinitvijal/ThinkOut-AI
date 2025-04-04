import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Sparkles, MessageSquare, Mail, FileText } from "lucide-react"
import Cards from "@/components/ui/Cards"



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
            <Link href= "#about" className="text-sm font-medium hover:underline underline-offset-4" >
              About
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
              Create LinkedIn posts, emails, articles, and more with the power of AI. Multiple models, one seamless experience.
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
              <Mic className="h-6 w-6 text-[#7c3aed]" />
              <h3 className="text-xl font-bold">Voice to Text</h3>
              <p className="text-center text-muted-foreground">
                Speak naturally and watch as your words transform into professional content.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
              <MessageSquare className="h-6 w-6 text-[#7c3aed]" />
              <h3 className="text-xl font-bold">LinkedIn Posts</h3>
              <p className="text-center text-muted-foreground">
                Create engaging LinkedIn content that stands out in your network.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
              <Mail className="h-6 w-6 text-[#7c3aed]" />
              <h3 className="text-xl font-bold">Professional Emails</h3>
              <p className="text-center text-muted-foreground">
                Draft perfect emails for any situation with customizable styles.
              </p>
            </div>
          </div>
        </section>

        <section id="models" className="container py-16 space-y-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Multiple AI Models</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose from the best AI models for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {["GPT-4o", "GPT-4o Mini", "Gemini", "Grok"].map((model) => (
              <div key={model} className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 p-6 shadow-sm">
                <FileText className="h-6 w-6 text-[#7c3aed]" />
                <h3 className="text-lg font-bold">{model}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="container py-16 space-y-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Pricing Plans</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose a plan that suits your needs.
            </p>
            <div id='cards'>
              <Cards/>
              
            </div>
          </div>
        </section>

        
        <section id="about" className="container py-16 space-y-16">
  <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center animate-fadeIn">
    <div className="w-full h-px bg-gray-800 mb-8"></div>
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About Us</h2>

    <p className="max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8">
      Welcome to <span className="text-purple-500 font-semibold">ThinkOut Ai</span> — your ultimate AI-powered content generation platform. 
      We empower creators, marketers, and businesses to amplify their creativity and streamline content production with cutting-edge AI tools.
      <br /><br />
      At <span className="text-purple-500 font-semibold">ThinkOut Ai</span>, creativity knows no boundaries. Whether you’re an individual enhancing your personal brand or a business scaling content with precision, we’re here to transform your vision into reality.
      <br /><br />
      <span className="text-purple-500 font-semibold">Our platform offers:</span><br /><br />

      <span className="text-purple-500 font-semibold">Personalized Content Creation:</span> Generate high-quality, tailored content across various platforms including LinkedIn, Instagram, Emails, and more.
      <br /><br />
      <span className="text-purple-500 font-semibold">Versatile AI Tools:</span> From grammar perfection to imaginative storytelling, our tools enhance every aspect of your content journey.
      <br /><br />
      <span className="text-purple-500 font-semibold">User-Centric Evolution:</span> We continuously refine our features to meet your evolving needs, ensuring a seamless, enriching experience.
      <br /><br />
      We are passionate about making creativity effortless and impactful. Join us as we redefine content creation through the power of AI.
      <br /><br />
      <strong className="text-purple-500 text-xl">Ready to think beyond? Welcome to ThinkOut Ai.</strong>
    </p>
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



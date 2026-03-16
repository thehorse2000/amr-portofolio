import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper"
import { bio } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Amr Osama, Senior Software Engineer in Egypt. Available for new projects and opportunities in software development.",
  keywords: ["Contact Amr Osama", "Software Engineer Egypt Contact", "Hire Frontend Developer Egypt"],
};

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="max-w-2xl mx-auto text-center items-center py-20">
      <div className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 font-mono">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Available for new opportunities
      </div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s Connect</h2>
      
      <p className="text-muted-foreground text-lg mb-10 max-w-lg">
        Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
      </p>

      <Button size="lg" asChild className="font-mono text-base px-8 h-12 shadow-[0_0_20px_rgba(0,255,209,0.2)] hover:shadow-[0_0_30px_rgba(0,255,209,0.4)] transition-all">
        <Link href={`mailto:${bio.email}`}>
          Say Hello
        </Link>
      </Button>

      <div className="flex gap-6 mt-16 pt-8 border-t border-border/40 w-full justify-center">
        <Link href={bio.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href={bio.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href={`mailto:${bio.email}`} className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </SectionWrapper>
  )
}
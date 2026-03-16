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

      <form 
        action="https://formsubmit.co/amrosama5@gmail.com" 
        method="POST"
        className="w-full max-w-lg flex flex-col gap-6"
      >
        {/* Anti-Spam / Configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Portfolio Inquiry!" />
        <input type="hidden" name="_template" value="table" />

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="name" className="font-black uppercase text-sm tracking-widest">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required 
            placeholder="YOUR NAME"
            className="w-full bg-background border-4 border-foreground p-4 font-black uppercase placeholder:text-muted-foreground/50 focus:bg-primary focus:outline-none shadow-brutalist transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="email" className="font-black uppercase text-sm tracking-widest">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            placeholder="YOUR@EMAIL.COM"
            className="w-full bg-background border-4 border-foreground p-4 font-black uppercase placeholder:text-muted-foreground/50 focus:bg-primary focus:outline-none shadow-brutalist transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <label htmlFor="message" className="font-black uppercase text-sm tracking-widest">Message</label>
          <textarea 
            name="message" 
            id="message"
            rows={4}
            required 
            placeholder="WHAT'S ON YOUR MIND?"
            className="w-full bg-background border-4 border-foreground p-4 font-black uppercase placeholder:text-muted-foreground/50 focus:bg-primary focus:outline-none shadow-brutalist transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="h-20 text-2xl font-black uppercase border-4 border-foreground shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          Send Message
        </Button>
      </form>

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
"use client"

import Link from "next/link"
import { Github, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import LiveClock from "@/components/LiveClock"
import { bio } from "@/lib/data"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const triggerSearch = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-8 border-foreground bg-background">
      <div className="flex h-20 w-full max-w-7xl mx-auto items-center px-4 md:px-8 justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-mono text-3xl font-black uppercase tracking-tighter text-primary group-hover:bg-foreground group-hover:text-primary transition-all px-2 border-4 border-foreground shadow-brutalist active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
              amrosama<span className="text-foreground group-hover:text-primary">.dev</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-black uppercase">
            <Link href={bio.linkedin} target="_blank" className="transition-all hover:bg-primary px-2 border-2 border-transparent hover:border-foreground">
              LinkedIn
            </Link>
            <Link href={bio.resume} target="_blank" className="transition-all hover:bg-primary px-2 border-2 border-transparent hover:border-foreground">
              Resume
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={triggerSearch}
            className="hidden md:flex items-center justify-between gap-4 border-4 border-foreground bg-background px-4 py-2 text-sm font-black uppercase transition-all shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <span className="flex items-center gap-2">
              <Search size={16} />
              <span>Search</span>
            </span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 bg-primary px-1.5 font-mono text-[10px] font-black border-2 border-foreground">
              ⌘K
            </kbd>
          </button>
          
          <div className="hidden md:flex items-center border-l-4 border-foreground pl-4 space-x-4 h-12">
            <LiveClock />
            
            <Link href={bio.github} target="_blank">
              <Button variant="outline" size="icon" className="h-10 w-10 border-4">
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <ThemeToggle />
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={
                <Button variant="outline" size="icon" className="border-4">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              } />
              <SheetContent side="right" className="flex flex-col gap-6 w-full md:w-64 pt-12 px-8 border-l-8 border-foreground rounded-none bg-background">
                <SheetTitle className="font-black uppercase text-2xl">Navigation</SheetTitle>
                <div className="flex flex-col gap-4">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase border-4 border-foreground p-4 shadow-brutalist hover:bg-primary">Home</Link>
                  <Link href={bio.linkedin} target="_blank" className="text-xl font-black uppercase border-4 border-foreground p-4 shadow-brutalist hover:bg-primary">LinkedIn</Link>
                  <Link href={bio.resume} target="_blank" className="text-xl font-black uppercase border-4 border-foreground p-4 shadow-brutalist hover:bg-primary">Resume</Link>
                  <Link href={bio.github} target="_blank" className="text-xl font-black uppercase border-4 border-foreground p-4 shadow-brutalist hover:bg-primary flex items-center gap-2">
                    <Github className="h-6 w-6" /> GitHub
                  </Link>
                </div>
                <div className="mt-auto border-t-4 border-foreground pt-4">
                  <LiveClock />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { sections } from "@/lib/data"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-[240px] shrink-0 flex-col gap-2 pt-8 pr-8 border-r-4 border-foreground min-h-[calc(100vh-80px)]">
      <div className="sticky top-32 flex flex-col gap-1">
        <h4 className="mb-6 px-3 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground font-mono">
          Navigation
        </h4>
        <nav className="flex flex-col gap-3">
          {sections.map((section) => {
            const isActive = pathname === section.path || (pathname.startsWith(section.path) && section.path !== '/');
            
            return (
              <Link
                key={section.id}
                href={section.path}
                className={cn(
                  "group relative flex items-center px-4 py-3 text-sm font-black uppercase transition-all border-4",
                  isActive
                    ? "bg-primary border-foreground shadow-brutalist translate-x-1 translate-y-1 shadow-none"
                    : "border-transparent hover:border-foreground hover:bg-muted/50"
                )}
              >
                {section.label}
                {isActive && (
                  <span className="absolute -left-1 top-1/2 -mt-2 h-4 w-2 bg-foreground" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

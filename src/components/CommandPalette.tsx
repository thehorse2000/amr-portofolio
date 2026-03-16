"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { sections, bio } from "@/lib/data"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {sections.map((section) => (
            <CommandItem
              key={section.id}
              value={section.label}
              onSelect={() => {
                runCommand(() => router.push(section.path))
              }}
            >
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem
            onSelect={() => {
              runCommand(() => window.open(bio.github, "_blank"))
            }}
          >
            GitHub
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => window.open(bio.linkedin, "_blank"))
            }}
          >
            LinkedIn
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => window.open(bio.resume, "_blank"))
            }}
          >
            Resume
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => window.location.href = `mailto:${bio.email}`)
            }}
          >
            Email
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
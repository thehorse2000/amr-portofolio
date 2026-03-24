"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { openSourceProjects } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OpenSourceClient() {
  return (
    <SectionWrapper id="open-source" className="max-w-6xl">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        Open Source
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {openSourceProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full flex flex-col border-[6px] shadow-brutalist-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <CardHeader className="bg-foreground text-background border-b-[6px] border-foreground p-8">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-4xl font-black uppercase leading-none">{project.title}</CardTitle>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="bg-background text-foreground p-2 border-4 border-background hover:bg-primary hover:border-primary transition-colors">
                        <Github className="h-8 w-8" />
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" className="bg-background text-foreground p-2 border-4 border-background hover:bg-primary hover:border-primary transition-colors">
                        <ExternalLink className="h-8 w-8" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardDescription className="text-xl font-bold uppercase text-background/80 leading-tight">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 flex-grow">
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="text-lg px-4 py-1 border-4 border-foreground bg-foreground text-background shadow-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

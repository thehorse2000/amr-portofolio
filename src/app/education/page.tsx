"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { education } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
  return (
    <SectionWrapper id="education" className="max-w-4xl">
      <motion.h2 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        Education
      </motion.h2>

      <div className="flex flex-col gap-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-[6px] shadow-brutalist-lg">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="bg-foreground text-background p-4 border-4 border-foreground">
                    <GraduationCap className="h-12 w-12" />
                  </div>
                  <div className="flex flex-col">
                    <CardTitle className="text-4xl md:text-5xl font-black text-primary-foreground leading-tight">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-2xl font-black uppercase mt-2">
                      <span>{edu.institution}</span>
                      <span className="bg-foreground text-background px-3 py-1 text-xl border-4 border-foreground">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-2xl font-bold uppercase leading-tight border-l-8 border-foreground pl-6">
                  {edu.notes}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
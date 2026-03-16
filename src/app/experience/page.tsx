"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="max-w-4xl">
      <motion.h2 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-12">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-[6px] shadow-brutalist-lg">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-col">
                    <CardTitle className="text-4xl md:text-5xl font-black text-primary-foreground">
                      {exp.role}
                    </CardTitle>
                    <span className="text-2xl font-black uppercase tracking-tight mt-2">
                      {exp.company}
                    </span>
                  </div>
                  <div className="bg-foreground text-background px-4 py-2 text-xl font-black uppercase border-4 border-foreground">
                    {exp.dates}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="list-none flex flex-col gap-4 text-xl font-bold uppercase leading-tight">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-primary font-black">▶</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
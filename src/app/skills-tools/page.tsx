"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { skills, certifications } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function SkillsTools() {
  return (
    <SectionWrapper id="skills-tools" className="max-w-6xl pb-32">
      <motion.h2 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        Skills
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 mb-12">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-6 border-[6px] border-foreground p-8 shadow-brutalist-lg"
          >
            <h3 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-foreground pb-4 bg-primary text-primary-foreground -mx-8 -mt-8 p-8 capitalize">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              {items.map((skill) => (
                <Badge 
                  key={skill} 
                  className="px-6 py-2 text-xl font-black border-4 border-foreground bg-background text-foreground shadow-brutalist hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 border-[8px] border-foreground p-12 bg-secondary shadow-brutalist-lg"
      >
        <h3 className="text-5xl font-black uppercase tracking-tighter border-b-8 border-foreground pb-4 leading-none">
          Certifications
        </h3>
        <div className="flex flex-col gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col gap-2 border-l-8 border-foreground pl-6">
              <span className="text-3xl font-black uppercase tracking-tighter leading-none">
                {cert.name}
              </span>
              <span className="text-xl font-bold uppercase opacity-80 italic">
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
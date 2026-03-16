"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { bio } from "@/lib/data"
import { motion } from "framer-motion"

export default function AboutClient() {
  return (
    <SectionWrapper id="about" className="max-w-4xl">
      <motion.h2 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-9xl font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        About
      </motion.h2>
      
      <div className="grid gap-12 md:grid-cols-[1fr_300px] items-start">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold uppercase leading-tight border-l-8 border-foreground pl-6"
          >
            Hello! I&apos;m {bio.name}, a {bio.title} with a robust expertise in e-commerce development and AI-driven solutions.
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6 text-xl font-medium uppercase leading-snug"
          >
            <p>
              {bio.description}
            </p>
            <p>
              Throughout my career, I&apos;ve specialized in optimizing internal workflows, significantly enhancing project efficiency, and building innovative tools like AI chatbots to streamline communications.
            </p>
            <p>
              I am driven to leverage my frontend engineering skills to deliver scalable web applications that improve user engagement and drive business success.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-8 border-foreground bg-primary p-8 aspect-square flex flex-col items-center justify-center font-black text-primary-foreground select-none shadow-brutalist-lg"
        >
          <pre className="leading-none text-2xl">
            {
`
  ___
 / _ \\
| | | |
| |_| |
 \\___/
`
            }
          </pre>
          <span className="mt-8 text-3xl uppercase tracking-tighter">amrosama.dev</span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

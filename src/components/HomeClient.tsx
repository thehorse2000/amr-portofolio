"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { bio } from "@/lib/data"
import { Button } from "@/components/ui/button"

export default function HomeClient() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-between py-12">
      <div className="flex justify-between items-start">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-primary text-primary-foreground px-4 py-1 text-2xl font-black uppercase border-4 border-foreground shadow-brutalist"
        >
          Senior Software Engineer Egypt
        </motion.h2>
        
        <div className="hidden md:block text-right font-black uppercase tracking-tighter text-sm">
          EST. 2019 / Amr Developer / BASED IN CAIRO, EG
        </div>
      </div>

      <div className="my-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="flex-1 order-2 md:order-1">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase break-words"
          >
            {bio.name.split(" ")[0]}<br />
            <span className="text-primary stroke-foreground [-webkit-text-stroke:4px_black] dark:[-webkit-text-stroke:4px_white]">
              {bio.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative w-64 h-64 md:w-80 md:h-80 border-8 border-foreground shadow-brutalist overflow-hidden order-1 md:order-2 shrink-0"
        >
          <Image 
            src="/img/amr-portofolio.jpg" 
            alt="Amr Osama - Senior Software Engineer Egypt"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl"
        >
          <p className="text-2xl md:text-3xl font-black leading-tight uppercase border-t-8 border-foreground pt-6">
            {bio.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-6 justify-end"
        >
          <Button asChild size="lg" className="h-20 text-2xl">
            <Link href={bio.resume} target="_blank" className="flex items-center gap-2">
              Resume <ArrowUpRight size={32} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-20 text-2xl">
            <Link href={`mailto:${bio.email}`} className="flex items-center gap-2">
              Contact <ArrowUpRight size={32} />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="mt-16 flex flex-wrap gap-8 font-black uppercase border-t-8 border-foreground pt-6">
        <span>AVAILABLE FOR PROJECTS</span>
        <span>GITHUB/thehorse2000</span>
        <span>LINKEDIN/AMROSAMA5</span>
        <span className="ml-auto">©2026</span>
      </div>
    </div>
  )
}

"use client"

import SectionWrapper from "@/components/SectionWrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Users, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GithubStats {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export default function Stats() {
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getGithubStats() {
      try {
        const res = await fetch("https://api.github.com/users/amrosama")
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getGithubStats()
  }, [])

  return (
    <SectionWrapper id="stats" className="max-w-6xl">
      <motion.h2 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter border-b-[12px] border-foreground mb-12 pb-4 leading-none"
      >
        Stats
      </motion.h2>

      {loading ? (
        <div className="text-4xl font-black uppercase animate-pulse">Loading Stats...</div>
      ) : !stats ? (
        <div className="text-4xl font-black uppercase text-red-500 border-8 border-red-500 p-8">Failed to load GitHub stats.</div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <Card className="border-[6px] shadow-brutalist-lg h-full">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black uppercase">Repos</CardTitle>
                  <BookOpen className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-6xl font-black text-foreground">{stats.public_repos}</div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="border-[6px] shadow-brutalist-lg h-full">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black uppercase">Followers</CardTitle>
                  <Users className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-6xl font-black text-foreground">{stats.followers}</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <Card className="border-[6px] shadow-brutalist-lg h-full">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black uppercase">Following</CardTitle>
                  <Users className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-6xl font-black text-foreground">{stats.following}</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <Card className="border-[6px] shadow-brutalist-lg h-full">
              <CardHeader className="bg-primary text-primary-foreground border-b-[6px] border-foreground p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black uppercase">Profile</CardTitle>
                  <Github className="h-6 w-6" />
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <a 
                  href={stats.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-2xl font-black uppercase hover:bg-foreground hover:text-background transition-all p-2 border-4 border-foreground inline-block mt-4"
                >
                  @amrosama
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  )
}
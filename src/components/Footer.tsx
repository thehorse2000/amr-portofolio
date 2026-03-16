import { bio } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t-8 border-foreground bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-black text-3xl uppercase tracking-tighter">
            {bio.name}
          </span>
          <span className="font-bold text-sm uppercase text-muted-foreground">
            © 2026 / {bio.title} / Cairo, EG
          </span>
        </div>
        
        <div className="flex flex-wrap gap-8 font-black uppercase text-sm">
          <a href={bio.github} target="_blank" className="hover:bg-primary px-2 border-2 border-transparent hover:border-foreground transition-all">
            Github
          </a>
          <a href={bio.linkedin} target="_blank" className="hover:bg-primary px-2 border-2 border-transparent hover:border-foreground transition-all">
            Linkedin
          </a>
          <a href={`mailto:${bio.email}`} className="hover:bg-primary px-2 border-2 border-transparent hover:border-foreground transition-all">
            Email
          </a>
        </div>

        <div className="text-right">
          <div className="bg-primary text-primary-foreground px-4 py-1 text-sm font-black uppercase border-4 border-foreground shadow-brutalist">
            Status: Open for projects
          </div>
        </div>
      </div>
    </footer>
  )
}

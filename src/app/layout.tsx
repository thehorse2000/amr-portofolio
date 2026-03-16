import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Amr Osama | Software Engineer Egypt | Senior Developer",
    template: "%s | Amr Osama",
  },
  description: "Amr Osama is a Senior Software Engineer based in Egypt, specializing in frontend development, AI-driven solutions, and scalable web applications. Amr Developer with 5+ years of experience.",
  keywords: ["Amr Osama", "Amr Developer", "Software Engineer Egypt", "Software Egypt", "Senior Software Engineer", "Frontend Developer Egypt", "React Developer Egypt", "Next.js Developer Egypt", "Adobe Certified Expert"],
  authors: [{ name: "Amr Osama", url: "https://amrosama.dev" }],
  creator: "Amr Osama",
  metadataBase: new URL("https://amrosama.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amr Osama | Software Engineer Egypt | Senior Developer",
    description: "Senior Software Engineer based in Egypt. Specializing in AI-powered web applications and frontend excellence.",
    url: "https://amrosama.dev",
    siteName: "Amr Osama Portfolio",
    images: [
      {
        url: "/img/amr-portofolio.jpg",
        width: 1200,
        height: 630,
        alt: "Amr Osama - Software Engineer Egypt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amr Osama | Software Engineer Egypt | Senior Developer",
    description: "Senior Software Engineer based in Egypt. Specializing in AI-powered web applications and frontend excellence.",
    creator: "@amrosama5", // Assuming from linkedin/github handle
    images: ["/img/amr-portofolio.jpg"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground",
          geistSans.variable,
          geistMono.variable,
          "font-sans"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 flex w-full max-w-7xl mx-auto md:px-8">
              <Sidebar />
              <main className="flex-1 px-4 md:px-8 pb-16 w-full pt-24 md:pt-32">
                {children}
              </main>
            </div>
            <Footer />
          </div>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
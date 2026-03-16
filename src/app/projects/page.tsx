import { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the software engineering projects by Amr Osama, including AI-powered solutions, clinic management systems, and e-commerce platforms in Egypt.",
  keywords: ["Software Projects Egypt", "AI Chatbot Egypt", "Clinic Management Software Egypt", "Next.js Projects", "Amr Osama Portfolio"],
};

export default function Projects() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://amrosama.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://amrosama.dev/projects",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectsClient />
    </>
  );
}

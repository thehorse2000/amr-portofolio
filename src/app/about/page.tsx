import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Amr Osama, a Senior Software Engineer in Egypt with over 5 years of experience in frontend development and AI solutions.",
  keywords: ["About Amr Osama", "Software Engineer Egypt", "Frontend Developer Egypt", "Amr Developer"],
};

export default function About() {
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
        name: "About",
        item: "https://amrosama.dev/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutClient />
    </>
  );
}

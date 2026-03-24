import { Metadata } from "next";
import OpenSourceClient from "@/components/OpenSourceClient";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source projects by Amr Osama, including AI dubbing tools and desktop app stores for AI-native applications.",
  keywords: ["Open Source Projects", "AI Open Source", "dubbify", "vibedepot", "Amr Osama"],
};

export default function OpenSource() {
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
        name: "Open Source",
        item: "https://amrosama.dev/open-source",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <OpenSourceClient />
    </>
  );
}

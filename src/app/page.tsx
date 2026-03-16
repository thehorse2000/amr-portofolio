import HomeClient from "@/components/HomeClient";
import { bio } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: bio.name,
    jobTitle: bio.title,
    url: "https://amrosama.dev",
    sameAs: [
      bio.github,
      bio.linkedin,
    ],
    description: bio.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}

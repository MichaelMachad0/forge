import { siteConfig } from "@/lib/site-config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.person.name,
        jobTitle: siteConfig.person.role,
        url: siteConfig.url,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        knowsAbout: ["SaaS", "Software Architecture", "Artificial Intelligence", "Automation"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.title}`,
        description: siteConfig.description,
        inLanguage: siteConfig.locale,
        author: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

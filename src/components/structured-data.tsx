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
        email: siteConfig.email.display,
        url: siteConfig.url,
        worksFor: {
          "@type": "Organization",
          name: "GIA",
          url: siteConfig.gia.url,
        },
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.gia.url],
        knowsAbout: [
          "SaaS",
          "Arquitetura de software",
          "Inteligência artificial",
          "Automação",
          "Consultoria",
        ],
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

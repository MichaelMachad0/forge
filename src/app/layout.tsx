import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "engenharia de software",
    "arquitetura de software",
    "desenvolvimento SaaS",
    "inteligência artificial",
    "automação",
    "Michael Machado",
  ],
  authors: [{ name: siteConfig.person.name, url: siteConfig.url }],
  creator: siteConfig.person.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/brand/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/brand/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <StructuredData />
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

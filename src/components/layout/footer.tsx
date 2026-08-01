import { Container } from "@/components/ui/container";
import Link from "next/link";
import { navItems, siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-lg font-bold tracking-[-0.03em]">{siteConfig.name}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              {siteConfig.title}. {siteConfig.slogan}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:items-end">
            <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center text-xs text-muted hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-muted hover:border-border-strong hover:text-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-subtle pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.person.name}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="min-h-11 content-center hover:text-foreground">Privacidade</Link>
            <Link href="/termos" className="min-h-11 content-center hover:text-foreground">Termos</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

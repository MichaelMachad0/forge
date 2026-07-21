import { Container } from "@/components/ui/container";
import { navItems, siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-foreground">{siteConfig.name}</span>
          <span className="text-xs text-muted">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

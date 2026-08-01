"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border-subtle bg-background/92 backdrop-blur-xl"
          : "border-transparent bg-background/40",
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/#hero"
          className="inline-flex min-h-11 items-center gap-3 text-foreground"
          onClick={closeMenu}
        >
          <span className="text-base font-bold tracking-[-0.03em]">{siteConfig.name}</span>
          <span className="hidden h-4 w-px bg-border-strong sm:block" />
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted sm:block">
            {siteConfig.title}
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contato" size="md">
            Iniciar conversa
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="border-t border-border-subtle bg-background lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center justify-between border-b border-border-subtle py-3 text-base text-muted last:border-0 hover:text-foreground"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
              </Link>
            ))}
            <Button href="/#contato" className="mt-5 min-h-12 justify-center" onClick={closeMenu}>
              Iniciar conversa
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}

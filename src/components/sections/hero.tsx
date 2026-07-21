"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlowBackground } from "@/components/ui/glow-background";
import { siteConfig } from "@/lib/site-config";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center pt-24 sm:pt-20"
    >
      <GlowBackground />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <Sparkles size={14} className="text-accent" />
            Engenharia de software &amp; produto
          </motion.span>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg font-medium text-accent sm:text-xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm font-medium uppercase tracking-[0.15em] text-muted"
          >
            {siteConfig.slogan}
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="#projetos" size="lg" icon={<ArrowRight size={18} />}>
              Ver Projetos
            </Button>
            <Button
              href="#contato"
              size="lg"
              variant="secondary"
              icon={<MessageCircle size={18} />}
            >
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-10 hidden justify-center sm:flex"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border-strong p-1">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-muted"
          />
        </div>
      </motion.div>
    </section>
  );
}

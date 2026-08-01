import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pb-20 pt-32">
      <Container>
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">
          Esta página não existe — mas o caminho de volta está claro.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
          O endereço pode ter mudado ou nunca ter feito parte da superfície pública do FORGE.
        </p>
        <Button href="/" size="lg" className="mt-10" icon={<ArrowLeft size={18} />}>
          Voltar ao início
        </Button>
      </Container>
    </section>
  );
}

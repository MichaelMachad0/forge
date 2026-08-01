import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos aplicáveis ao uso da superfície pública do FORGE.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Termos" title="Uma superfície pública de portfólio e engenharia.">
      <section>
        <h2>Finalidade</h2>
        <p className="mt-3">O FORGE apresenta identidade profissional, iniciativas, referências e conteúdo técnico. O site não constitui oferta contratual, garantia de resultado ou compromisso de entrega.</p>
      </section>
      <section>
        <h2>Conteúdo e propriedade</h2>
        <p className="mt-3">Textos, marca e ativos permanecem protegidos pelos termos de licença indicados no repositório. Projetos externos conservam suas próprias licenças.</p>
      </section>
      <section>
        <h2>Disponibilidade</h2>
        <p className="mt-3">Conteúdo, status e links podem mudar conforme os projetos evoluem. Informações comerciais e técnicas privadas permanecem fora desta superfície.</p>
      </section>
      <p>Última revisão: 1 de agosto de 2026.</p>
    </LegalPage>
  );
}

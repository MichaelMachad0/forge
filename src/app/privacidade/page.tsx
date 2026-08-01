import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o site FORGE trata privacidade e dados pessoais.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Política" title="Privacidade por padrão, sem rastreamento desnecessário.">
      <section>
        <h2>Dados coletados</h2>
        <p className="mt-3">Este site não usa cookies, analytics, contas de usuário ou formulários próprios nesta versão. A navegação pública não exige fornecer dados pessoais.</p>
      </section>
      <section>
        <h2>Links externos</h2>
        <p className="mt-3">Links para GitHub, LinkedIn e WhatsApp levam a serviços de terceiros, sujeitos às políticas dessas plataformas.</p>
      </section>
      <section>
        <h2>Contato</h2>
        <p className="mt-3">Ao iniciar uma conversa por um canal externo, você escolhe quais informações compartilhar diretamente com a respectiva plataforma.</p>
      </section>
      <p>Última revisão: 1 de agosto de 2026.</p>
    </LegalPage>
  );
}

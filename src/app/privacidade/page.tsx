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
        <p className="mt-3">A navegação pública não exige conta, cookies ou analytics. Se você usar o formulário de contato, serão coletados nome, e-mail, empresa opcional e a mensagem enviada.</p>
      </section>
      <section>
        <h2>Finalidade e tratamento</h2>
        <p className="mt-3">Os dados do formulário são usados somente para analisar e responder à solicitação. O envio é processado pelo Resend como provedor de e-mail e não é usado para listas de marketing.</p>
      </section>
      <section>
        <h2>Proteção e retenção</h2>
        <p className="mt-3">O formulário usa validação, controles antispam e conexão segura. As mensagens são mantidas apenas pelo tempo necessário para conduzir a conversa e cumprir obrigações aplicáveis.</p>
      </section>
      <section>
        <h2>Links externos</h2>
        <p className="mt-3">Links para GitHub, LinkedIn e WhatsApp levam a serviços de terceiros, sujeitos às políticas dessas plataformas.</p>
      </section>
      <section>
        <h2>Contato</h2>
        <p className="mt-3">Você pode solicitar acesso, correção ou exclusão dos dados respondendo à conversa iniciada. Em canais externos, o tratamento também segue as políticas da respectiva plataforma.</p>
      </section>
      <p>Última revisão: 1 de agosto de 2026.</p>
    </LegalPage>
  );
}

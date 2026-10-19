import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gia",
    name: "GIA",
    kicker: "Produto / SaaS modular",
    description:
      "SaaS modular em produção, com clientes pagantes, para organizar operações, conectar módulos e incorporar IA com responsabilidade.",
    tags: ["SaaS", "IA", "Automação", "Arquitetura modular"],
    status: "Em produção · clientes pagantes",
    href: "https://github.com/MichaelMachad0/gia-showcase",
    website: {
      href: "https://usegia.com.br",
      label: "Visitar o GIA",
    },
    // TODO(metrics): preencher somente com números verificáveis.
    // Vagas previstas — não usar estimativa:
    // - clientes pagantes ativos
    // - tempo em produção
    // - módulos em uso pelos clientes
    // Enquanto o array estiver vazio, a página do case não exibe métricas.
    metrics: [],
    featured: true,
    caseStudy: {
      summary:
        "SaaS modular em produção, com clientes pagantes, para organizar operações, conectar módulos e incorporar inteligência artificial com responsabilidade.",
      challenge:
        "Operações, finanças e comunicação costumam crescer em ferramentas desconectadas. A GIA responde a isso com uma superfície comum, já em produção, sem transformar cada vertical em um sistema isolado e sem expor detalhes sensíveis da operação real.",
      approach: [
        "Organizar o ecossistema por módulos de domínio que possam evoluir de forma independente.",
        "Tratar identidade, autorização e contexto da empresa como capacidades compartilhadas.",
        "Reservar IA e automação para trabalho repetitivo ou analítico, com auditabilidade.",
      ],
      architecture: [
        "Aplicação web como superfície unificada do produto.",
        "Autenticação e autorização antes do acesso aos módulos.",
        "Serviços de aplicação entre os domínios e as fronteiras de persistência.",
        "Auditoria e observabilidade atravessando decisões de acesso e operações.",
      ],
      evidence: [
        "Produto em produção, com clientes pagantes, acessível em usegia.com.br.",
        "Documentação pública de visão, arquitetura, multi-tenancy e segurança.",
        "Mapa explícito de produtos do ecossistema, incluindo SILOG e módulos financeiros.",
      ],
      outcome:
        "A GIA está em produção e atende clientes pagantes. Este case registra o modelo do produto e a postura de engenharia. Métricas quantitativas entram somente quando houver números verificáveis para compartilhar.",
      boundary:
        "O case descreve o produto em produção sem publicar código proprietário, dados de clientes, schemas, topologia operacional ou métricas quantitativas.",
    },
  },
  {
    slug: "forge",
    name: "FORGE",
    kicker: "Identidade / Engenharia pública",
    description:
      "A superfície pública onde produto, arquitetura e decisões de engenharia são apresentados com clareza e sem expor código proprietário.",
    tags: ["Next.js", "TypeScript", "Acessibilidade"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/forge",
    caseStudy: {
      summary: "A superfície profissional que transforma identidade, projetos e decisões de engenharia em uma narrativa pública coerente.",
      challenge: "Um portfólio técnico precisa demonstrar profundidade sem parecer um catálogo genérico, sem inventar resultados e sem misturar a identidade profissional com um produto SaaS.",
      approach: [
        "Estruturar a página por proposta de valor, projetos, princípios, estudos e contato.",
        "Centralizar domínio, identidade e links para eliminar divergências editoriais.",
        "Tratar acessibilidade, SEO, segurança e testes como parte do produto, não como acabamento.",
      ],
      architecture: [
        "Next.js App Router com páginas estáticas e componentes de seção.",
        "Conteúdo estruturado em TypeScript, separado da apresentação.",
        "Metadata API, sitemap, robots e JSON-LD conectados à mesma configuração.",
        "Gates locais para lint, tipos, testes, build e smoke E2E.",
      ],
      evidence: [
        "Código-fonte público e histórico de mudanças no GitHub.",
        "Páginas legais, 404 personalizada e headers de segurança verificáveis.",
        "Deployment público com domínio canônico e integração contínua pela Vercel.",
      ],
      outcome: "O resultado é uma base editorial rápida, responsiva e auditável que apresenta capacidades reais e pode evoluir por incrementos pequenos.",
      boundary: "O FORGE é um portfólio e uma narrativa de engenharia. Não é uma plataforma multi-tenant nem representa métricas de produtos comerciais.",
    },
  },
  {
    slug: "saas-architecture",
    name: "SaaS Architecture",
    kicker: "Referência / Arquitetura",
    description:
      "Padrões públicos para discutir modularidade, multi-tenancy e evolução de sistemas SaaS sem revelar topologias privadas.",
    tags: ["Arquitetura", "SaaS", "Open source"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/saas-architecture",
    caseStudy: {
      summary: "Uma referência pública para raciocinar sobre SaaS modular e multiempresa sem confundir padrões com uma aplicação pronta.",
      challenge: "Discussões de arquitetura frequentemente ficam abstratas demais ou revelam detalhes indevidos de sistemas reais. A referência precisa ser útil, explícita sobre limites e independente de uma topologia proprietária.",
      approach: [
        "Documentar decisões por responsabilidade: tenancy, módulos, identidade, dados e operação.",
        "Tornar autorização explícita e adotar negação por padrão como princípio.",
        "Usar exemplos TypeScript mínimos para ilustrar contratos, não funcionalidades de produção.",
      ],
      architecture: [
        "Clientes atravessam apresentação e identidade antes dos módulos de domínio.",
        "Módulos controlam comportamento; serviços de plataforma oferecem capacidades compartilhadas.",
        "Fronteiras de persistência deixam propriedade e consistência explícitas.",
        "Auditoria e observabilidade recebem sinais de identidade, módulos e plataforma.",
      ],
      evidence: [
        "Documentos dedicados a arquitetura em camadas, multi-tenancy e modularidade.",
        "Registros sobre identidade, segurança, observabilidade e qualidade.",
        "Seção de antipadrões e governança para orientar evolução, não apenas desenho inicial.",
      ],
      outcome: "A referência oferece um vocabulário comum para avaliar decisões SaaS e explicar trade-offs sem se apresentar como starter kit implantável.",
      boundary: "Os diagramas e exemplos são deliberadamente abstratos. Eles não reproduzem código, schemas, endpoints ou infraestrutura do GIA.",
    },
  },
  {
    slug: "ai-automation-examples",
    name: "AI Automation Examples",
    kicker: "Laboratório / Código público",
    description:
      "Exemplos independentes em TypeScript para explorar saídas estruturadas, automações e integrações com IA.",
    tags: ["IA", "TypeScript", "Automação"],
    status: "Em produção",
    href: "https://github.com/MichaelMachad0/ai-automation-examples",
    caseStudy: {
      summary: "Um laboratório público de exemplos independentes para IA generativa, automação, agentes e integrações em TypeScript.",
      challenge: "Exemplos de IA perdem valor quando escondem requisitos, misturam código comercial ou tratam saídas probabilísticas como dados confiáveis. O repositório precisa ser didático, executável e seguro por padrão.",
      approach: [
        "Separar cada capacidade em um exemplo independente com instruções próprias.",
        "Validar saídas estruturadas com tipos e falhar de forma fechada quando o contrato não é atendido.",
        "Manter segredos exclusivamente em variáveis de ambiente e usar apenas bibliotecas públicas.",
      ],
      architecture: [
        "Pastas independentes para API, agentes, workflows, RAG, embeddings e chatbots.",
        "Documentação compartilhada para arquitetura, prompts e diagramas.",
        "TypeScript e Zod no exemplo completo de structured output.",
        "Fronteiras explícitas entre exemplos concluídos e scaffolds planejados.",
      ],
      evidence: [
        "Exemplo de structured output documentado como completo e executável.",
        "Mapa público do repositório que identifica capacidades ainda em scaffold.",
        "Licença MIT e política de segurança que proíbe credenciais no código.",
      ],
      outcome: "O laboratório cria uma base honesta para aprendizagem e experimentação: um exemplo concluído, áreas futuras claramente rotuladas e nenhuma dependência de código privado.",
      boundary: "Este é um showcase técnico, não um produto. Apenas structured output está marcado como completo; os demais tópicos permanecem planejados ou em scaffold.",
    },
  },
];

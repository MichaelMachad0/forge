import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "gia",
    name: "GIA",
    kicker: "GIA Escolar / Gestão escolar",
    description:
      "Sistema de gestão escolar em produção no cliente fundador: uma escola particular em Camaçari-BA. Estágio inicial, com um único cliente.",
    tags: ["Gestão escolar", "SaaS", "Implantação", "Suporte"],
    status: "Em produção · 1º cliente",
    href: "https://github.com/MichaelMachad0/gia-showcase",
    website: {
      href: "https://www.usegia.com.br/",
      label: "Visitar site do GIA",
    },
    metricsSummary: "1º cliente em produção · 68 alunos",
    metrics: [
      { value: "1", label: "Cliente fundador em produção" },
      { value: "68", label: "Alunos atendidos" },
      { value: "9", label: "Funcionários usando o sistema" },
    ],
    company: {
      form: "Empresa Simples de Inovação (Inova Simples)",
      cnpj: "67.953.300/0001-66",
      opened: "julho de 2026",
      city: "Camaçari-BA",
    },
    featured: true,
    caseStudy: {
      summary:
        "GIA Escolar, sistema de gestão escolar, em produção no cliente fundador: uma escola particular em Camaçari-BA. 68 alunos atendidos e 9 funcionários usando. Estágio inicial, um único cliente.",
      challenge:
        "Uma escola particular em Camaçari-BA precisava conduzir a rotina escolar sem um sistema de gestão próprio. Planilhas e ferramentas soltas não sustentam alunos, equipe e a operação do dia a dia.",
      approach: [
        "Implantar e configurar a GIA Escolar para a rotina dessa escola.",
        "Hospedar o sistema em nuvem e cuidar das atualizações e da manutenção corretiva e evolutiva.",
        "Oferecer suporte técnico remoto para os funcionários que usam o sistema.",
      ],
      architecture: [
        "Aplicação web como superfície do sistema de gestão escolar.",
        "Configuração feita na implantação, antes do uso pela equipe da escola.",
        "Hospedagem em nuvem sob responsabilidade da GIA.",
        "Manutenção e suporte remoto como parte contínua da operação.",
      ],
      evidence: [
        "GIA Escolar em produção no cliente fundador, uma escola particular em Camaçari-BA.",
        "68 alunos atendidos e 9 funcionários usando o sistema.",
        "A GIA responde por implantação, configuração, hospedagem em nuvem, manutenção corretiva e evolutiva, atualizações e suporte técnico remoto.",
      ],
      outcome:
        "A GIA Escolar opera em produção para um único cliente fundador. Os números publicados — 68 alunos e 9 funcionários — referem-se só a essa escola. O produto está em estágio inicial.",
      boundary:
        "Este case não publica o nome da escola, preços, dados de alunos, nomes de pessoas, CPF ou contatos. O código de produção permanece privado. Os números não representam uma base maior de clientes.",
      story: {
        problem:
          "Uma escola particular em Camaçari-BA precisava organizar a gestão escolar sem um sistema próprio. A rotina dependia de controles soltos, difíceis de manter entre alunos e equipe.",
        solution:
          "A GIA Escolar é o sistema de gestão escolar da GIA. A GIA faz a implantação, a configuração, a hospedagem em nuvem, a manutenção corretiva e evolutiva, as atualizações e o suporte técnico remoto.",
        status:
          "O sistema está em produção no cliente fundador — uma escola particular em Camaçari-BA. São 68 alunos atendidos e 9 funcionários usando. É um único cliente, em estágio inicial.",
      },
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

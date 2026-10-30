Léo Andaimes — Plataforma Web Institucional & Geração de Leads

> Aplicação web institucional de alta performance desenvolvida para locação, montagem e manutenção de estruturas de acesso para a construção civil e setor industrial. Projeto estruturado com foco em semântica, acessibilidade, compatibilidade cross-browser, observabilidade e arquitetura orientada à conversão de dados.

---

   📌 Sumário Executivo para Recrutadores

Este projeto foi construído para simular um ambiente de produção real, servindo como modelo de estudo e aplicação prática para duas áreas estratégicas de tecnologia:

   O projeto evidencia práticas sólidas de qualidade preventiva, testes funcionais e não-funcionais, validação de cenários de borda ( edge cases ), acessibilidade (WCAG), compatibilidade entre dispositivos/navegadores e resiliência de scripts (graceful degradation & progressive enhancement).
   A interface foi concebida sob a ótica de  Data-Driven Design , com estrutura preparada para rastreamento de funil (GA4/GTM), mensuração de taxas de conversão (CRO), telemetria de interação do usuário (scroll depth, cliques em CTAs, tempo em tela) e testes A/B.

---

   🛠️ Stack Tecnológica & Arquitetura

   Front-end Core:  HTML5 Semântico, CSS3 Modular (Design Tokens via CSS Custom Properties, Grid & Flexbox) e Vanilla JavaScript (ES6+ Modules).
   Build Tooling & Bundling:  Vite (otimização de chunks, minificação e compressão gzip de assets).
   Tipagem & Qualidade de Código:  TypeScript (validação estática com `tsc --noEmit`) e ESLint.
   APIs Nativas do Navegador:  `IntersectionObserver API` para animações fluidas e contadores de estatísticas em demanda, sem sobrecarregar o Event Loop.
   Resiliência:  Estratégia de  Progressive Enhancement  e bloco `<noscript>` para garantir renderização de 100% do conteúdo mesmo em ambientes restritos ou com falha de execução de scripts.

---

Destaques Técnicos: 

1. Testes Não-Funcionais & Resiliência
   Graceful Degradation:  A interface implementa regras condicionais que previnem quebras visuais em navegadores legados (fallback automático para `IntersectionObserver` ausente e regras de exibição sob a diretiva `<noscript>`).
   Performance & Core Web Vitals:  Arquitetura sem frameworks pesados de terceiros, garantindo pontuações elevadas em métricas vitais:
     LCP (Largest Contentful Paint):  Reduzido pelo carregamento prioritário de elementos críticos do Hero.
     CLS (Cumulative Layout Shift):  Dimensões reservadas para ícones, logos e blocos de conteúdo para evitar saltos de layout durante a renderização.
     INP / FID:  Baixa latência de resposta a eventos de clique e rolagem graças à execução assíncrona de módulos.

2. Acessibilidade (A11y - WCAG 2.1 AA)
  Estrutura hierárquica clara de cabeçalhos (`h1` único, seguido por `h2` e `h3` correlacionados).
  Nomes acessíveis para botões flutuantes e links de contato via `aria-label`.
  Relação de contraste de cores estritamente validada entre o azul corporativo (` 0B2545`), o dourado institucional (` D4AF37`) e fundos neutros.
  Navegabilidade funcional via teclado com indicadores de foco (`:focus-visible`) preservados.

├── index.html            Markup semântico com meta tags OpenGraph e tags de acessibilidade
├── style.css             Design tokens, tipografia, grid responsivo e keyframes de animação
├── script.js             Lógica modular: controles de cabeçalho, reveal no scroll, contadores e eventos
├── vite.config.ts        Configurações de build do Vite para otimização de bundle
├── package.json          Dependências, scripts de automação de testes e linter
└── tsconfig.json         Configuração de validação estática de código

# Portfolio — jeanreis.dev.br

Site de portfólio pessoal de **Jean Reis**, desenvolvedor de software e criador de produtos digitais. É uma landing page de página única (`one-page`) que apresenta o profissional, seus serviços, projetos, stack e experiência, além de canais de contato.

## 📌 Visão geral

- **O que é:** portfólio/landing page pessoal em português (pt-BR), com tema claro/escuro.
- **Objetivo:** apresentar Jean Reis, gerar credibilidade e converter visitantes em conversas (contato por WhatsApp, e-mail, GitHub ou LinkedIn).
- **Abordagem:** site estático, focado em performance, SEO e animações de scroll.
- **Domínio:** https://jeanreis.dev.br

## 🧩 Seções da página

A página inicial (`src/pages/index.astro`) é composta por:

1. **Hero** — apresentação com efeito de scroll (GSAP ScrollTrigger) e destaque de serviços.
2. **Projects** — projetos/cases entregues.
3. **Skills** — competências técnicas.
4. **Experiences** — trajetória profissional.
5. **ScrollTextLines** — faixa de texto com animação de scroll.
6. **Sobre** — bio e áreas de atuação.
7. **Contato** — canais diretos (WhatsApp, e-mail, GitHub, LinkedIn).
8. **Footer** — rodapé com navegação.

Componentes auxiliares: `Navbar`, `ThemeToggle`, `CursorFollow`, `HeroWater`, além dos botões flutuantes de WhatsApp e "voltar ao topo".

## 🛠️ Stack

| Área | Tecnologias |
| --- | --- |
| Framework | [Astro](https://astro.build) 6 (saída estática) |
| Estilo | [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/vite`) |
| UI | Componentes no estilo [shadcn](https://ui.shadcn.com) (`src/ui/`) + [data-slot](https://www.npmjs.com/package/@data-slot/navigation-menu) |
| Linguagem | TypeScript |
| Animações | [GSAP](https://gsap.com) + [Motion](https://motion.dev) |
| Ícones | Iconify (`@iconify-json/hugeicons`) e SVGs próprios |
| Fontes | Astro Fonts (Google Fonts: Inter, Suez One, Poppins, Inter Tight) |
| SEO | `@astrojs/sitemap`, meta tags, Open Graph e JSON-LD (`Layout.astro`) |
| Deploy | [Vercel](https://vercel.com) (`@astrojs/vercel`) |
| Serviços previstos | [Resend](https://resend.com) (e-mail) e [Upstash](https://upstash.com) (rate limit) |

## 📁 Estrutura

```text
/
├── public/               # assets estáticos (ícones, imagens, og.svg)
├── src/
│   ├── assets/           # imagens processadas pelo Astro
│   ├── components/       # seções e componentes da página
│   ├── layouts/          # Layout.astro (head, SEO, scripts globais)
│   ├── lib/              # utilitários (utils.ts, select.ts)
│   ├── pages/            # rotas (index.astro)
│   ├── styles/           # globals.css (tema e Tailwind)
│   └── ui/               # primitivos de UI reutilizáveis
├── astro.config.mjs      # site, fontes, sitemap, adapter Vercel
└── package.json
```

## 🚀 Como rodar

Pré-requisitos: Node.js e [pnpm](https://pnpm.io).

```bash
pnpm install          # instala as dependências
pnpm dev              # servidor de desenvolvimento em http://localhost:4321
pnpm build            # gera o build de produção em ./dist/
pnpm preview          # pré-visualiza o build localmente
pnpm astro ...        # comandos da CLI do Astro (ex.: astro check)
```

## 🔑 Variáveis de ambiente

Copie `.env.example` para `.env` e preencha conforme a necessidade:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## 📝 Notas

- A seção de contato atualmente expõe canais diretos; o envio do formulário por e-mail ainda está pendente (ver `CONVERSAO.md`).
- Planejamento de posicionamento e SEO fica em `REPOSITIONING_PLAN.md` e `SEO_PLAN.md`.
- Contexto do projeto (branding, SEO, perfil) está documentado em `memory/`.

# Jean Reis — Portfólio

Site pessoal e portfólio de **Jean Reis**, desenvolvedor de software em Salvador (BA).
Landing page de página única, estática, com foco em produto, performance e animações de scroll.

- **Produção:** [jeanreis.dev.br](https://jeanreis.dev.br)
- **Stack principal:** Astro 6 · TypeScript · Tailwind CSS 4 · GSAP · Motion · Vercel

---

## Visão geral

O site apresenta, em uma única rota, quem é o desenvolvedor, o que ele entrega (MVPs, integrações, front-end, back-end e refatoração), projetos publicados e privados, stack técnica, trajetória profissional e canais de contato.

Características técnicas:

- **Astro 6** com `output: "static"` — HTML pré-renderizado, sem framework de UI no cliente.
- **Ilhas de interação** em `<script>` por componente (GSAP + Motion), carregadas apenas onde necessário.
- **Tailwind CSS 4** via plugin do Vite, com tokens de tema em `oklch` (claro/escuro).
- **SEO completo** — canonical, Open Graph, JSON-LD (`@graph`) e sitemap automático.
- **Acessibilidade e movimento reduzido** — todas as seções têm fallback para `prefers-reduced-motion`, `aria-*` e navegação por teclado.
- **Deploy na Vercel** com `@astrojs/vercel`, gerando artefatos estáticos.

---

## Stack

| Camada | Tecnologias |
|---|---|
| Framework | Astro 6 (`@astrojs/vercel`, `@astrojs/sitemap`) |
| Linguagem | TypeScript 5 (`astro/tsconfigs/strict`) |
| Estilo | Tailwind CSS 4 + `tw-animate-css` + `bejamas/tailwind.css`, tokens em `src/styles/globals.css` |
| UI kit | Componentes do registry [Bejamas](https://ui.bejamas.com) (`components.json`) + `@data-slot/*`, ícones Hugeicons e SVGs inline |
| Animações | GSAP 3 + ScrollTrigger (scroll sticky/scrub) e Motion (entradas, micro-interações) |
| Tipografia | Astro Fonts (Inter, Suez One, Poppins, Inter Tight via Google) + fonte local `RX100` |
| Imagens | `astro:assets` + `sharp` (otimização/WebP no build) |
| Integrações previstas | `resend` (envio de e-mail) e `@upstash/ratelimit` + `@upstash/redis` (rate limit) — ver [Variáveis de ambiente](#variáveis-de-ambiente) |
| Deploy | Vercel |

---

## Requisitos

- **Node.js 20+** (recomendado 22)
- **pnpm 10+** — o projeto usa `pnpm-lock.yaml` e `pnpm-workspace.yaml` (com `allowBuilds` para `esbuild`, `msw` e `sharp`)

---

## Como rodar

```bash
pnpm install       # instala as dependências
pnpm dev           # servidor de desenvolvimento em http://localhost:4321
pnpm build         # build de produção em ./dist
pnpm preview       # pré-visualiza o build localmente
pnpm astro ...     # CLI do Astro (astro check, astro add, etc.)
```

---

## Estrutura do projeto

```text
/
├── src/
│   ├── pages/index.astro          # única rota — compõe as seções da página
│   ├── layouts/Layout.astro       # <head> com SEO/JSON-LD, navbar, botões flutuantes, reveal global
│   ├── components/                # seções e widgets do site (ver tabela abaixo)
│   ├── ui/                        # componentes do registry Bejamas (button, input, textarea, select, navigation-menu, marquee)
│   ├── lib/utils.ts               # helper `cn` (clsx + tailwind-merge)
│   ├── lib/select.ts              # controlador do Select (scroll, resize, acessibilidade)
│   ├── styles/globals.css         # tokens de tema claro/escuro, fontes e keyframes
│   └── assets/                    # imagens processadas pelo pipeline do Astro
├── public/                        # estáticos: avatar, og.svg, tech-icons/, fonts/, robots.txt
├── memory/                        # notas de contexto do projeto (branding e SEO)
├── astro.config.mjs               # site, fonts, sitemap, adapter Vercel
├── components.json                # configuração do registry Bejamas
└── SEO_PLAN.md · CONVERSAO.md · REPOSITIONING_PLAN.md   # planos internos
```

### Componentes

| Seção (`id`) | Arquivo | Conteúdo |
|---|---|---|
| Hero (`#hero`) | `components/Hero.astro` | Nome, subtítulo, CTA para WhatsApp, lista de serviços com tooltip, marquee de tecnologias, `HeroWater.astro` ao fundo |
| Projetos (`#projetos`) | `components/Projects.astro` | Carrossel horizontal por scroll; projetos públicos abrem em nova aba, privados abrem `<dialog>` com detalhes |
| Skills (`#skills`) | `components/Skills.astro` | Lista vertical com item ativo destacado conforme o scroll |
| Experiências (`#experiencias`) | `components/Experiences.astro` | Timeline alternada com progresso da linha e reveal por item |
| Frases em movimento (`#scroll-lines`) | `components/ScrollTextLines.astro` | Faixas de texto com velocidades/direções diferentes |
| Sobre (`#sobre`) | `components/Sobre.astro` | Texto em efeito máquina de escrever controlado pelo scroll |
| Contato (`#contato`) | `components/Contact.astro` | Canais diretos: WhatsApp, e-mail, GitHub e LinkedIn |
| Rodapé | `components/Footer.astro` | Navegação, contatos, wordmark e dados legais |
| Globais | `components/Navbar.astro`, `CursorFollow.astro`, `ThemeToggle.astro` | Menu overlay com barra de progresso, cursor customizado e alternância de tema |

---

## Animações e interações

- **GSAP + ScrollTrigger** para seções `sticky` com `scrub` (Hero, Projetos, Sobre, frases, Experiências, Contato e reveal do rodapé).
- **Motion** para entradas (`animate`, `inView`, `stagger`, `scroll`) e micro-interações de hover/foco.
- **Reveal global** via atributo `data-reveal` (opacidade + translate) aplicado no `Layout.astro`.
- **Reduced motion:** cada seção remove `sticky`, alturas extras e transformações quando `prefers-reduced-motion: reduce` está ativo; o typewriter exibe o texto completo e o cursor para de piscar.

## Tema claro/escuro

- `ThemeToggle.astro` alterna a classe `.dark` no `<html>` e persiste a escolha em `localStorage("theme")`.
- Um script `is:inline` no `<head>` aplica o tema antes da pintura, evitando flash de tema incorreto.
- As cores ficam em variáveis CSS (`oklch`) definidas em `src/styles/globals.css` e expostas ao Tailwind via `@theme inline`.

## SEO

- `site: "https://jeanreis.dev.br"` em `astro.config.mjs` (base para canonical e sitemap).
- `<title>`, description, keywords, canonical, Open Graph e Twitter Card em `src/layouts/Layout.astro`.
- **JSON-LD** com `@graph`: `ProfessionalService` (catálogo de serviços), `Person`, `WebSite` e `CreativeWork` dos projetos.
- Sitemap automático com `@astrojs/sitemap` e `public/robots.txt` apontando para `sitemap-index.xml`.
- Fontes servidas via **Astro Fonts** e imagens otimizadas com `astro:assets`/`sharp` (LCP/CLS).

## Onde editar o conteúdo

Os dados de cada seção ficam em arrays no *frontmatter* dos próprios componentes:

- Projetos: array `projects` em `src/components/Projects.astro`
- Experiências: array `experiences` em `src/components/Experiences.astro`
- Skills, serviços do Hero, tecnologias e canais de contato: `Skills.astro`, `Hero.astro`, `TechStack.astro` e `Contact.astro`
- Textos institucionais e metadados: `Sobre.astro`, `Footer.astro` e `Layout.astro`

---

## Variáveis de ambiente

`.env.example` lista as variáveis previstas para um formulário de contato com envio por e-mail e proteção contra spam. **Esse fluxo ainda não está implementado** — hoje o contato acontece por links diretos (WhatsApp, e-mail e redes), mas as dependências já estão instaladas:

```bash
cp .env.example .env
```

| Variável | Uso previsto |
|---|---|
| `RESEND_API_KEY` | Envio de e-mail (Resend) |
| `CONTACT_TO_EMAIL` | Destinatário das mensagens |
| `CONTACT_FROM_EMAIL` | Remetente verificado |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | Rate limit das requisições (Upstash) |

Arquivos `.env` e `.env.production` estão no `.gitignore`.

---

## Deploy

O projeto usa o adapter `@astrojs/vercel` com saída estática, então o deploy é automático na Vercel a partir da branch principal. Para publicar manualmente:

```bash
pnpm build     # gera ./dist
pnpm preview   # valida o resultado antes de subir
```

---

## Documentação interna

- `memory/MEMORY.md` — índice de contexto do projeto (branding e SEO).
- `memory/project_branding.md` — a marca `ovelha_tech` foi descontinuada; o logo é o texto `jeanreis.dev.br` com a fonte `--font-logo`.
- `SEO_PLAN.md` — auditoria de SEO e pendências (ex.: converter `og.svg` em `og.png` 1200×630, criar landing pages dedicadas).
- `CONVERSAO.md` e `REPOSITIONING_PLAN.md` — planos de conversão e reposicionamento (podem estar parcialmente desatualizados em relação ao código atual).

---

## Contato

- WhatsApp: [+55 71 99151-6655](https://wa.me/5571991516655)
- E-mail: [contato@jeanreis.dev.br](mailto:contato@jeanreis.dev.br)
- GitHub: [github.com/jrcarls](https://github.com/jrcarls)
- LinkedIn: [linkedin.com/in/jeanreis-dev](https://www.linkedin.com/in/jeanreis-dev/)

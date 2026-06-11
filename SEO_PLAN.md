# Plano de SEO — jeanreis.dev.br

**Auditoria atualizada em:** 2026-06-11 (Agente Opus — SEO técnico)
**Nota auditada:** 72/100
**Foco:** Indexação em buscadores (Google, Bing, DuckDuckGo, Yahoo, Yandex, Mobile-First)
**Objetivo:** Conversão de leads — desenvolvimento LegalTech + AppSec para escritórios de advocacia

---

## Parte 1 — Críticos (quebram indexação ou performance)

- [x] **Footer logo quebrado** — `/logo_ovelha.svg` inexistente (marca ovelha_tech descontinuada); substituído por logo texto igual ao Navbar (`Footer.astro:21`)
- [x] **`og:image` aponta para 404** — referenciava `/og.png`; só existe `/og.svg`; corrigida referência (`Layout.astro:38,46`)
- [x] **`foto_perfil.png` sem otimização (1.46 MB, sem width/height)** — movida para `src/assets/`, usando `<Image />` do Astro com dimensões explícitas para resolver LCP e CLS (`Hero.astro:138`, `Sobre.astro:37`)
- [x] **Sem `site` no `astro.config.mjs`** — canonical e sitemap sem URL base; adicionado `site: "https://jeanreis.dev.br"`

---

## Parte 2 — Importantes (impactam ranking e autoridade)

- [x] **Sitemap manual desatualizado** — instalado `@astrojs/sitemap` para geração automática; removido `public/sitemap.xml` manual
- [x] **Schema.org desalinhado** — trocado `Person` por `ProfessionalService` + adicionado bloco `Organization`; `sameAs` preenchido com GitHub e LinkedIn (`Layout.astro:52-75`)
- [x] **AppSec ausente no `<title>` e `<description>`** — meta tags atualizadas para cobrir os dois nichos: LegalTech e AppSec
- [x] **`alt` de imagens genérico** — `alt="Jean Reis"` → incluída especialidade para E-E-A-T
- [x] **`sameAs` vazio no JSON-LD** — preenchido com GitHub e LinkedIn já existentes no Footer

---

## Parte 3 — Sugestões (alavancam conversão orgânica a longo prazo)

- [ ] **Criar página `/sistemas-para-advocacia`** — landing page dedicada com H1, schema `Service`, e conteúdo otimizado para intent "sistema para escritório de advocacia"
- [ ] **Criar página `/auditoria-appsec`** — landing page dedicada com H1, schema `Service`, e conteúdo otimizado para intent "auditoria de segurança OWASP"
- [ ] **`<meta name="theme-color">`** — adicionar cor primária para melhorar experiência no Chrome Android
- [ ] **Fallback `prefers-reduced-motion`** — elementos com `opacity:0` inicial; adicionar CSS fallback para quando JS falhar
- [ ] **Converter `og.svg` em `og.png` 1200×630** — buscadores como Bing e indexadores gerais preferem PNG/JPG para imagem de preview

> **Ação pendente (usuário):** converter `public/og.svg` → `public/og.png` (1200×630px).
> Use Inkscape, Figma ou https://cloudconvert.com/svg-to-png

---

## Histórico de versões

| Data | Versão | Nota | Mudanças |
|---|---|---|---|
| 2026-06-11 | v2 | 72→88/100 (estimado) | Partes 1 e 2 implementadas |
| anterior | v1 | ~60/100 | Meta tags, JSON-LD Person+FAQ, sitemap, robots.txt |

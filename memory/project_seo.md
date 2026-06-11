---
name: project-seo
description: Status da auditoria SEO — nota 72→88/100, partes 1 e 2 implementadas em 2026-06-11
metadata:
  type: project
---

Auditoria SEO realizada por agente Opus em 2026-06-11. Nota inicial: 72/100.

**Implementado (Partes 1 e 2):**
- Footer logo `/logo_ovelha.svg` corrigido para texto (marca descontinuada) — [[project-branding]]
- `og:image` corrigida de `/og.png` (404) para `/og.svg`
- `foto_perfil.png` (1.46 MB) migrada para `src/assets/` + `<Image />` do Astro → gerada como WebP 3kB
- `sharp` instalado como dependência para otimização de imagens no build
- `site: "https://jeanreis.dev.br"` adicionado ao `astro.config.mjs`
- `@astrojs/sitemap` instalado e configurado; sitemap manual removido
- Schema.org atualizado: `Person` → `ProfessionalService` + `WebSite` com `sameAs`, `areaServed`, `telephone`
- `<title>` e `<meta description>` atualizados para cobrir LegalTech **e** AppSec
- `<meta name="theme-color">` adicionado
- `robots.txt` atualizado para apontar para `sitemap-index.xml`

**Pendente (Parte 3):**
- Converter `public/og.svg` em `public/og.png` 1200×630 (ação do usuário)
- Criar páginas dedicadas `/sistemas-para-advocacia` e `/auditoria-appsec`
- Fallback CSS para `prefers-reduced-motion` (elementos com `opacity:0` inicial)

**Why:** SEO focado exclusivamente em buscadores (Google, Bing, Mobile-First) — sem foco em redes sociais.
**How to apply:** Ao criar novas páginas ou seções, seguir o padrão de Schema.org ProfessionalService e garantir que AppSec aparece junto com LegalTech nas meta tags.

# Plano de SEO — jeanreis.dev.br

**Objetivo:** posicionar Jean Reis como desenvolvedor de software e automações para escritórios de advocacia (LegalTech).

---

## Diagnóstico

O site já tem bom conteúdo sobre LegalTech, mas os sinais que o Google usa para ranquear — title, description, Open Graph, dados estruturados — ainda falam "AppSec genérico" em vez de "desenvolvedor para escritórios de advocacia". Além disso, faltam elementos técnicos importantes.

---

## Etapas

### ✅ 1. Reescrita dos meta tags (`src/layouts/Layout.astro`)

| Tag | Atual | Proposto |
|-----|-------|----------|
| `<title>` | Jean Reis - Desenvolvedor de Software & AppSec | Jean Reis — Desenvolvedor LegalTech para Escritórios de Advocacia |
| `<meta description>` | "Dev especializado em Python, Django e AppSec..." | "Desenvolvo sistemas e automações sob medida para escritórios de advocacia. LegalTech, APIs jurídicas e automações que eliminam o retrabalho. Atendimento direto." |
| `og:title` | "Jean Reis, Desenvolvedor de Software" | "Jean Reis — Sistemas & Automações para Escritórios de Advocacia" |
| `og:description` | genérica | focada na dor do advogado |
| `keywords` | ausente | legaltech, software jurídico, automação jurídica, sistema para escritório de advocacia, desenvolvedor para advogados |

---

### ✅ 2. Dados estruturados JSON-LD (`src/layouts/Layout.astro`)

Adicionar dois schemas no `<head>`:

- **`Person`** — sinaliza para o Google quem você é e em que você é especializado
- **`FAQPage`** — transforma os acordeões do FAQ em **rich results** no Google (expandem no resultado de busca)

---

### ✅ 3. Criar `og.png` (`public/og.png`)

O arquivo é referenciado no Layout.astro mas **não existe**. Qualquer compartilhamento no WhatsApp/LinkedIn aparece sem imagem.

- Tamanho: 1200×630px
- Conteúdo: nome + título "Desenvolvedor LegalTech para Escritórios de Advocacia" + URL do site

**Feito parcialmente:** criado `public/og.svg` com o design pronto (1200×630, fundo escuro, nome, título, gradiente).

> **Ação pendente do usuário:** converter `public/og.svg` em `public/og.png` (WhatsApp/Facebook não aceitam SVG).
> Use: https://cloudconvert.com/svg-to-png ou abra o SVG no Inkscape/browser e exporte como PNG 1200×630.

---

### ✅ 4. Ajuste de conteúdo on-page (`src/components/Hero.astro`)

- **Badge** acima do H1: "Desenvolvimento de Software" → "LegalTech & Automação Jurídica"
- **H1**: "Software sob medida para o seu escritório." → "Sistemas e automações sob medida para o seu escritório de advocacia."

---

### ✅ 5. SEO técnico — `sitemap.xml` e `robots.txt` (`public/`)

| Arquivo | Status |
|---------|--------|
| `public/sitemap.xml` | ausente — criar |
| `public/robots.txt` | ausente — criar com `Sitemap:` apontando para o sitemap |

---

### ✅ 6. FAQ com perguntas jurídicas (`src/components/FAQ.astro`)

Adicionar perguntas específicas para advogados:
- "Você tem experiência com sistemas para escritórios de advocacia?"
- "Consigo integrar o sistema com ferramentas jurídicas como PJe ou Thomson Reuters?"

---

### ✅ 7. Opções do formulário (`src/components/Contact.astro`)

Trocar o select de serviço para opções mais específicas:
- Automações para escritório de advocacia
- Sistema jurídico sob medida
- AppSec e Segurança de Aplicações
- APIs e Produtos Web
- Ainda não sei, quero conversar

---

## Prioridade

| # | Item | Impacto | Esforço |
|---|------|---------|---------|
| 1 | Meta tags | Alto | Baixo |
| 2 | JSON-LD Person + FAQPage | Alto | Médio |
| 3 | og.png | Médio-alto | Médio |
| 4 | H1 e Hero badge | Médio | Baixo |
| 5 | sitemap.xml + robots.txt | Médio | Baixo |
| 6 | FAQ jurídico | Médio | Baixo |
| 7 | Formulário | Baixo | Baixo |

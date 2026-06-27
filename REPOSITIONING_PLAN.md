# Plano de reposicionamento: Desenvolvedor & AppSec → Engenheiro de IA Generativa

## Diagnóstico atual

O site está estruturado em torno de dois pilares: **desenvolvimento web seguro** (Django, APIs, RPA) e **AppSec** (OWASP, SAST, Burp Suite). A IA aparece de forma periférica, citada apenas no badge "RPA · LLMs" e numa linha sobre "Integração MCP para LLMs" no case de API.

---

## Ajustes por arquivo

### `Hero.astro`

| Elemento | Atual | Proposta |
|---|---|---|
| Badge topo | `Desenvolvimento & AppSec` | `IA Generativa & Engenharia de Software` |
| H1 | `Sistemas, automações e segurança de aplicações sob medida.` | `Agentes de IA, automações e produtos inteligentes sob medida.` |
| Subtítulo | `Desenvolvo aplicações web seguras e audito vulnerabilidades com base no OWASP Top 10. Automações que eliminam retrabalho e produtos prontos para escalar o seu negócio.` | `Construo agentes de IA, pipelines RAG e integrações com LLMs que automatizam processos reais e escalam o seu negócio.` |
| Bio | `desenvolvedor de software com experiência prática em LegalTech e automação jurídica` | `engenheiro de IA com foco em aplicações práticas de LLMs, agentes e automação inteligente de processos` |
| Badge orbital 1 ("Sistemas web") | `Sistemas web · Integração · API · Deploy` | `Agentes de IA · LLMs · MCP` |
| Badge orbital 2 ("Automações") | `Automações de processos · RPA · LLMs` | `Pipelines RAG · Embeddings · Retrieval` |
| Badge orbital 3 ("Segurança nativa") | `Segurança nativa · AppSec · OWASP` | `Engenharia · API · Deploy` |
| Stats | `1+ Anos em AppSec` | `2+ Anos com LLMs` |

---

### `Sobre.astro`

| Elemento | Atual | Proposta |
|---|---|---|
| H2 | `Jean Reis, Desenvolvedor de Software` | `Jean Reis, Engenheiro de IA Generativa` |
| Parágrafo 1 | `focado na construção de produtos web seguros...` | `focado na construção de produtos com IA generativa — agentes, pipelines RAG e automações inteligentes que resolvem problemas reais de negócio` |
| Parágrafo 2 | gancho de segurança | manter atenção total/sem intermediários, trocar gancho por **qualidade de engenharia e resultado mensurável** |
| Card 1 "Desenvolvedor" | `Python · Django · Outros` | `Engenheiro de IA · LLMs · Agentes` |
| Card 2 "AppSec" | `OWASP · SAST · Code Review` | `RAG · Embeddings · Vector DB` |
| Card 3 "LegalTech" | `Sistemas · RPA · API` | `Automação · MCP · Integrações` |
| `alt` das imagens | `desenvolvedor de software e especialista em AppSec` | `engenheiro de IA generativa` |

---

### `Services.astro`

O serviço de AppSec é **substituído** por um serviço de IA.

**Card 1 — IA Generativa & Agentes** (substituindo AppSec)
- Tag: `IA Generativa`
- Título: `Agentes de IA & Integrações com LLMs`
- Descrição: `Construo agentes, pipelines RAG e integrações com LLMs que transformam processos manuais em fluxos inteligentes — do prompt engineering à produção.`
- Entregáveis:
  - Agentes com ferramentas e integração via MCP
  - Pipeline RAG (chunking → embedding → retrieval → geração)
  - Integração com OpenAI, Anthropic e modelos abertos
  - Avaliação e otimização de prompts
  - Deploy com observabilidade e rastreamento de chamadas
- Tags: `LangChain`, `OpenAI`, `Anthropic`, `MCP`

**Card 2 — Sistemas & APIs** (substituindo o card dev atual)
- Tag: `Engenharia`
- Título: `APIs, Automações & Produtos Web`
- Descrição: `Do backend ao produto completo. APIs robustas, automações que eliminam retrabalho e aplicações web do zero ao deploy — com ou sem IA embarcada.`
- Entregáveis: manter os atuais, substituir RPA por "automações inteligentes com LLMs", remover referências a AppSec/OWASP
- Tags: `Python`, `Django`, `FastAPI`, `TypeScript`

---

### `TechStack.astro`

**Adicionar:** `LangChain`, `OpenAI`, `Anthropic`, `Ollama`, `Supabase`
**Remover:** `Celery`, `Nginx` (infraestrutura, sem valor de posicionamento)

---

### `Cases.astro`

| Case | Ação |
|---|---|
| Case 1: Correção de 14 vulnerabilidades AppSec | **Remover** |
| Case 2: SaaS Esboço Online | **Manter** — prova de produto do zero ao deploy |
| Case 3: API + MCP para LLMs | **Promover para primeiro** — mais alinhado com novo posicionamento; reforçar integração com agentes de IA |

Ordem final: API+MCP primeiro → Esboço Online segundo.

---

### `FAQ.astro`

**Remover:**
- `Você tem experiência com sistemas para escritórios de advocacia?`
- `Consigo integrar o sistema com ferramentas jurídicas como PJe ou Thomson Reuters?`

**Atualizar:**
- Pergunta de preço: trocar "Auditorias de segurança partem de R$ 2.500" por referência a projetos de IA

**Adicionar:**
- `Você constrói agentes de IA que funcionam de verdade, não só protótipos?`
- `Qual a diferença entre chamar uma API de LLM e ter um agente de IA?`
- `Você trabalha com modelos da OpenAI, Anthropic ou modelos abertos?`
- `Como funciona um pipeline RAG e quando faz sentido usar?`

---

### `Contact.astro`

**Opções do formulário:**

| Atual | Novo |
|---|---|
| `Automações para escritório de advocacia` | `Agente de IA ou chatbot inteligente` |
| `Sistema jurídico sob medida` | `Pipeline RAG e busca semântica` |
| `AppSec e Segurança de Aplicações` | `Automação inteligente de processos` |
| `APIs e Produtos Web` | `API, produto web ou sistema sob medida` |
| `Ainda não sei, quero conversar` | manter |

Atualizar texto do item "Diagnóstico inicial gratuito": retirar referência a "riscos" (linguagem de segurança), focar em oportunidades de IA.

---

## Prioridade de execução

| # | Arquivo | Impacto |
|---|---|---|
| 1 | `Hero.astro` | Primeira impressão — badge, título, subtítulo |
| 2 | `Services.astro` | Define o que você vende |
| 3 | `Sobre.astro` | Define quem você é |
| 4 | `TechStack.astro` | Prova de stack |
| 5 | `Cases.astro` | Reordenar + remover case AppSec |
| 6 | `FAQ.astro` | Remover perguntas jurídicas, adicionar perguntas de IA |
| 7 | `Contact.astro` | Opções do formulário |

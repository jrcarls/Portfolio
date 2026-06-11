# Melhorias de Conversão — jeanreis.dev.br

Levantamento feito em 2026-06-11 após revisão completa de todas as seções.

---

## P0 — Bloqueador crítico

- [ ] **Formulário de contato não envia nada** (`src/components/Contact.astro`)
  - Submit faz só `e.preventDefault()` + desabilita botão
  - `TODO` no código: conectar Formspree, Resend ou similar
  - Nenhuma mensagem chega enquanto isso

---

## P1 — Alto impacto

- [x] **WhatsApp como canal de contato** ✓
  - Botão flutuante em `src/layouts/Layout.astro` (bottom-right, acima do back-to-top, entra após 1.5s)
  - Card "Fale pelo WhatsApp" em `src/components/Contact.astro`, abaixo dos bullets
  - URL: `https://wa.me/5571991516655` com mensagem pré-preenchida

- [ ] **CTA ao final da seção Cases** (`src/components/Cases.astro`)
  - Visitante está no pico de motivação após ler os resultados
  - Seção termina sem nenhum prompt de ação
  - Sugestão: card ou botão "Quer um resultado parecido?" → `#contato`

- [ ] **Depoimentos de clientes**
  - Cases têm dados concretos mas sem citação humana
  - Uma aspas curta de FGB Advogados ou Esboço Online aumentaria a prova social
  - Pode ser uma nova seção entre Cases e Processo, ou cards embutidos nos cases

---

## P2 — Médio impacto

- [ ] **Revisar stat "5+ Projetos entregues" no Hero** (`src/components/Hero.astro`)
  - Número baixo pode gerar dúvida em vez de confiança
  - Opções: remover, trocar por anos de experiência (`5+ anos`), ou substituir por métrica mais forte

- [ ] **Corrigir inconsistência no case Esboço Online** (`src/components/Cases.astro`)
  - Título: "plataforma SaaS de criação de sermões pastorais"
  - Descrição: fala em "clínica de estética com agendamento" — parece placeholder
  - Mina credibilidade se o visitante perceber

- [ ] **Sinal de escassez/disponibilidade**
  - Ex: "Aceito no máximo 2 projetos simultâneos" ou "Vagas abertas para Julho"
  - Pode entrar no Hero (badge), na seção Sobre, ou no formulário de contato
  - Reforça o argumento de atenção total que já aparece no texto

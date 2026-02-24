# Cursor Squad Framework

> **A Software House in a Box.**
> Um sistema operacional completo para transformar o Cursor IDE em uma software house de elite, orquestrada por IA.

---

## 🧠 O Conceito

O **cursor-squad-framework** não é apenas um template de código; é um **Modelo Operacional (Operating Model)**. Ele impõe disciplina, governança e qualidade de "Empresa Unicornio" em cada linha de código, utilizando o **Plane.so** como a única fonte da verdade.

Funciona como uma máquina estrita onde agentes de IA assumem papéis especializados (PM, Tech Lead, UX, Dev, QA) e colaboram em um fluxo de trabalho linear e auditável.

## 🚀 Filosofia "Plane-First"

1.  **Hard-Fail Governance**: Sem conexão com o Plane.so, nada acontece. O sistema se recusa a operar "no escuro".
2.  **Single Source of Truth**: Cada requisito, bug ou feature deve existir como um ticket no Plane antes de virar código.
3.  **Real-Time Sync**: O progresso é refletido instantaneamente no quadro do projeto. Nada de "vou atualizar depois".

## 🛠️ The Squad (Agentes Especializados)

O framework opera através de personas de IA configuradas via `.cursor/rules` e `AGENTS.md`:

-   **👮 Tech Lead**: Orquestrador supremo. Define arquitetura, quebra tarefas e garante que ninguém quebre as regras.
-   **🎨 UX Product Designer**: Guardião da experiência. Nada entra em produção sem "Unicorn Standard" (UI premium, animações, estados de erro).
-   **🎯 PM Product**: Focado no "Porquê". Garante que estamos resolvendo o problema certo.
-   **🧱 Dev Backend & Frontend**: Executores de elite. Código limpo, testado e seguro por padrão.
-   **🕵️ QA Verifier**: O portão final. Valida DoD, RLS e Edge Cases.

## ⚙️ A Máquina (Fluxo de Trabalho)

O ciclo de desenvolvimento segue 5 fases rígidas:

1.  **Estratégia & Descoberta**: Do caos à clareza. Entrevistas, definição de problema e criação de Epics.
2.  **Planejamento**: Decomposição técnica. O Tech Lead quebra o Epic em Tasks granulares no Plane.
3.  **Execução**: Codificação sequencial com validação contínua (Lint, Build, Typecheck).
4.  **QA**: Validação rigorosa contra a Definition of Done (DoD).
5.  **Finalização**: Deploy, documentação e fechamento de tickets.

## 📦 Tech Stack Padrão

-   **Frontend**: Next.js 14+ (App Router), Tailwind CSS, ShadCN UI.
-   **Backend/Data**: Supabase (Auth, DB, Realtime), RLS Security.
-   **Gestão**: Plane.so (via MCP).
-   **AI Ops**: Cursor + MCP Server.

## 🏁 Quick Start (3 Steps)

### 1. Prepare o Terreno (Plane.so)
O Plane é o coração deste sistema. Sem ele, a squad não opera.
1. Crie uma conta no [Plane.so](https://plane.so/) e um novo Projeto.
2. Gere uma **API Key** em `Profile > Settings > API Tokens`.
3. Anote o `Project ID` (da URL ou settings) e o `Workspace Slug`.

### 2. Ative o "Sistema Nervoso" (MCP)
Configure o servidor MCP do Plane no seu Cursor (`Settings > Features > MCP`).
Certifique-se de passar as variáveis de ambiente necessárias para o servidor funcionar:
- `PLANE_API_KEY`: Seu token pessoal.
- `PLANE_ORG_SLUG`: Slug do seu workspace.
- `DEFAULT_PROJECT`: ID do projeto onde os tickets serão criados.

### 3. Invoque o Squad (Auto Mode)
Com tudo conectado, vá ao chat do Cursor (`Cmd+L` ou `Ctrl+L`) e digite:

> **`/auto` "Inicie o fluxo de descoberta para [Sua Ideia de App]"**

O comando **`/auto`** é o gatilho principal deste framework. Ele instrui o Cursor a entrar no modo de orquestração autônoma, onde o **Tech Lead** assume o comando total, entrevistando você através do **PM**, criando a arquitetura e os tickets no Plane, e coordenando os agentes de Dev e QA para entregar a solução completa sem microgerenciamento.

---

*Built with ❤️ by the Cursor Squad.*

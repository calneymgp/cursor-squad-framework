# Operating Model: Software House (Plane-first)

Este repositório opera como uma software house profissional de elite, onde o **Plane.so** é a única fonte da verdade. O sistema é projetado para falhar (hard-fail) caso a conexão com o Plane via MCP não esteja disponível.

## Fluxo de Trabalho (SDLC)

O desenvolvimento segue uma máquina operacional estrita de 5 fases:

1.  **Estratégia (The Brain)**: Sessões de inovação radical e mapeamento de mercado com o **COO**.
2.  **Descoberta (Começo)**: Entrevista inicial, definição de problemas reais e criação do Epic no Plane.so.
2.  **Plano**: Quebra do Epic em tickets técnicos no Plane.so com Definition of Done (DoD) por task.
3.  **Execução (Meio)**: Implementação técnica sequencial (FE, BE, Infra, UX) sincronizada em tempo real com o Plane.
4.  **QA**: Validação rigorosa dos Critérios de Aceite e Quick Tests.
5.  **Finalização (Fim)**: Fechamento de tickets, registro de Worklog no Plane e entrega final.

## Fonte da Verdade

- **Plane.so**: Única fonte da verdade para requisitos, tickets, status e histórico.
  - **Projeto Padrão**: `DEFAULT_PROJECT`
- **MCP Plane**: Ferramenta obrigatória para todas as operações de orquestração. **Se o MCP não estiver configurado, a operação é bloqueada.**

## Definition of Done (DoD) "Unicorn"

Para que uma tarefa seja considerada "Done", ela deve:
- Passar por Quick Tests (Lint, Typecheck, Build).
- Garantir segurança via Supabase RLS.
- Ter excelência visual e usabilidade (Padrão UX Designer).
- Estar 100% sincronizada e comentada no Plane.so.

## Matriz de Validação Operacional (MVO)

Para garantir que a "máquina" funcione sem erros, cada fase possui checks obrigatórios:

| Fase | Início (Portão de Entrada) | Meio (Execução) | Fim (Portão de Saída) |
| :--- | :--- | :--- | :--- |
| **Descoberta** | MCP Plane ativo + Dor validada | Entrevista PM (5-8 Whys) | Epic Criado no Plane |
| **Plano** | Epic ID validado | Decomposição técnica (FE/BE/UX) | Tasks Criadas + DoD por Task |
| **Execução** | Task em `In Progress` | Implementação sequencial + Skills | Quick Tests (Lint/Type) Passando |
| **QA** | Código pronto para validação | Happy Path + Edge Cases | QA Approved no Plane |
| **Finalização** | QA Approved | Worklog + Commit padrão | Tickets `Done` + Relatório Final |

---
*Gerenciado pelo Tech Lead Orchestrator.*

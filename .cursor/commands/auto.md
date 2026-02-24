# /auto - Tech Lead Autopilot (Plane-first)

## Overview
Comando mestre de orquestração. O **Tech Lead** (@.cursor/agents/tech_lead.md) assume o controle total do ciclo de vida da feature, garantindo que o Plane.so seja a única fonte da verdade.

## Protocolo de Execução
### 1. Input Obrigatório
- Descrição clara da feature, bug ou melhoria desejada pelo usuário.

### 2. Skills Requeridas
- `@.cursor/skills/plane-workflow/SKILL.md` (Orquestração no Plane)
- `@.cursor/skills/worklog/SKILL.md` (Registro final)

### 2. Pré-condição (Gates)
- **MCP Plane**: O servidor MCP `plane` deve estar configurado e funcional. **Caso contrário, aborte e instrua a configuração.**
- **Status do Repo**: Sem conflitos de git pendentes.

### 3. Ações (Workstream)
1. **Intake**: Chama **PM Product** (@.cursor/agents/pm_product.md) para definir o problema (Levine/Cagan style).
2. **Sync Plane**: Cria o Epic no Plane.so com PRD, Critérios de Aceite e Riscos via MCP.
3. **Plano**: Quebra em subtickets técnicos (FE, BE, UX, QA) no Plane via MCP.
4. **Orquestração**: Aciona subagentes de forma sequencial para implementação.
5. **QA**: Aciona **QA Verifier** (@.cursor/agents/qa_verifier.md) para validação de integridade (Quick Tests) e funcional.

### 4. Output Obrigatório
- Link do Epic e IDs das tarefas criadas no Plane.so.
- Resumo de decisões técnicas e assunções registradas no Plane.
- Instruções de teste passo a passo.

### 5. Próximo Estado
- Tickets em `In Progress` ou `Done` (se a execução for imediata).
- Workspace pronto para `/ship`.

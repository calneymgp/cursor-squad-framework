# /plan - Technical Planning

## Overview
O **Tech Lead** (@.cursor/agents/tech_lead.md) traduz a especificação em tickets técnicos executáveis no Plane.so.

## Protocolo de Execução
### 1. Input Obrigatório
- Relatório de `/intake` aprovado ou Epic ID do Plane.

### 2. Skills Requeridas
- `@.cursor/skills/plane-workflow/SKILL.md` (Decomposição técnica)

### 2. Pré-condição (Gates)
- **MCP Plane**: Obrigatório para criação de tickets.
- **Spec**: Deve haver critérios de aceite definidos.

### 3. Ações
1. **Decomposição**: Divide a feature em: Frontend, Backend (Motia), Database (RLS) e QA.
2. **DoD por Task**: Define critérios específicos para cada sub-ticket.
3. **Criação**: Registra as tarefas no Plane.so vinculadas ao Epic.

### 4. Output Obrigatório
- Lista de IDs dos tickets criados no Plane.so.
- Definição clara da ordem de execução.

### 5. Próximo Estado
- Workspace pronto para `/start` em uma tarefa específica.

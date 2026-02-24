# /bug - Incident Triaging

## Overview
Registra e tria um bug encontrado no sistema, acionando o **Tech Lead** (@.cursor/agents/tech_lead.md) para priorização.

## Protocolo de Execução
### 1. Input Obrigatório
- Descrição do erro.
- Passo a passo para reprodução.
- Severidade (S1 - Bloqueante, S2 - Alto, S3 - Médio, S4 - Cosmético).

### 2. Pré-condição (Gates)
- **MCP Plane**: Obrigatório para registro do incidente.

### 3. Ações
1. **Triagem**: Tech Lead valida o impacto e severidade.
2. **Registro**: Cria ticket no Plane.so com a tag `BUG`.
3. **SLA**: Define prazo de correção baseado na severidade.

### 4. Output Obrigatório
- ID do Ticket de Bug no Plane.so.
- Owner da investigação (FE/BE/Infra).

### 5. Próximo Estado
- Ticket pronto para investigação técnica via `/start`.

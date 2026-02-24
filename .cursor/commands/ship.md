# /ship - Final Release & Plane Closure

## Overview
O **Tech Lead** (@.cursor/agents/tech_lead.md) finaliza a feature, sincroniza o Plane e limpa a mesa.

## Protocolo de Execução
### 1. Input Obrigatório
- Relatório do `/qa` com status "Aprovado".

### 2. Skills Requeridas
- `@.cursor/skills/worklog/SKILL.md` (Fechamento técnico)

### 2. Pré-condição (Gates)
- **QA Verifier**: Deve haver uma evidência de aprovação.
- **Git**: Código pronto para commit/push.

### 3. Ações
1. **Ship It**: Prepara o resumo final da entrega.
2. **Plane Update**: Marca tickets como `Done` e comenta no Epic o link do commit/PR.
3. **Log**: Registra a entrada final no Worklog (via MCP no Plane).
4. **Commits**: Sugere mensagem de commit seguindo padrões técnicos.

### 4. Output Obrigatório
- Resumo final da entrega para o usuário.
- Link do Plane com status fechado.
- Instrução para rodar `/cleanup`.

### 5. Próximo Estado
- Workspace limpo e feature entregue.

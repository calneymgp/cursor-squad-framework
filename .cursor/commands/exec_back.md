# /exec_back - Backend Implementation (Motia Steps)

## Overview
Aciona o **Dev Backend (Motia)** (@.cursor/agents/dev_backend_motia.md) para lógica, API e segurança.

## Protocolo de Execução
### 1. Input Obrigatório
- Ticket ID ativo e validado via `/start`.

### 2. Skills Requeridas
- `@.cursor/skills/motia-steps/SKILL.md` (Lógica de Steps)
- `@.cursor/skills/supabase-rls/SKILL.md` (Políticas de segurança)

### 2. Pré-condição (Gates)
- **Database Schema**: Mudanças de schema devem estar planejadas.
- **MCP Plane**: Registro de decisões de backend no ticket.

### 3. Ações
1. **Steps**: Implementação de Motia Steps (handler/config).
2. **Security**: Escrita de políticas SQL RLS no Supabase.
3. **Types**: Sincronização de tipos de banco com TypeScript.

### 4. Output Obrigatório
- Lógica de backend funcional e segura.
- Políticas RLS implementadas.

### 5. Prosimo Estado
- Pronto para `/qa`.

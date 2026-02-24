# /start - Ticket Context Execution

## Overview
Prepara o ambiente para a execução de um ticket específico, garantindo foco total no objetivo.

## Protocolo de Execução
### 1. Input Obrigatório
- **ID do Ticket**: ID da tarefa no Plane.so.

### 2. Pré-condição (Gates)
- **MCP Plane**: O ticket deve existir e estar em estado `Todo` ou `Backlog`.
- **Fase**: Execução.

### 3. Ações
1. **Sync**: Lê os detalhes da tarefa e critérios de aceite diretamente do Plane via MCP.
2. **Status**: Atualiza o ticket para `In Progress` no Plane.so.
3. **Contexto**: Identifica os arquivos-alvo no repositório.

### 4. Output Obrigatório
- Resumo do objetivo da tarefa atual.
- Lista de arquivos que serão modificados.
- Checklist de DoD da tarefa.

### 5. Próximo Estado
- Chamada de `/exec_front`, `/exec_back` ou `/exec_infra` conforme a disciplina.

# /cleanup - Workspace Hard Reset

## Overview
Remove o cache operacional e prepara o Cursor para o próximo desafio.

## Protocolo de Execução
### 1. Input Obrigatório
- Confirmação de que o `/ship` foi concluído.

### 2. Pré-condição (Gates)
- **Plane Sync**: Verificação final se os tickets estão `Done` no Plane.

### 3. Ações
1. **Reset**: Confirma se todos os dados operacionais estão sincronizados no Plane.so.
2. **Archive**: Sugere arquivamento de logs locais obsoletos se necessário.
3. **Clean**: Remove arquivos temporários de teste/build.

### 4. Output Obrigatório
- Mensagem de "Workspace Pronto".

### 5. Próximo Estado
- Pronto para novo `/intake`.

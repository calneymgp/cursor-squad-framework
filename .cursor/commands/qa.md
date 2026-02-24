# /qa - Quality Assurance & Quick Tests

## Overview
Aciona o **QA Verifier** (@.cursor/agents/qa_verifier.md) para o portão de qualidade final antes do ship.

## Protocolo de Execução
### 1. Input Obrigatório
- Ticket ID implementado e pronto para validação.

### 2. Pré-condição (Gates)
- **Quick Tests**: O código deve passar por lint e typecheck local.

### 3. Ações
1. **Integridade**: Executa `npm run lint` e `tsc --noEmit`.
2. **Funcional**: Valida o "Happy Path" e "Edge Cases" contra o ticket do Plane.
3. **DoD**: Verifica cada item da Definition of Done "Unicorn".

### 4. Output Obrigatório
- Relatório técnico de aprovação/reprovação.
- Se houver falha, o ticket volta para o desenvolvedor com os logs do erro.

### 5. Próximo Estado
- Se aprovado: `/ship`.
- Se reprovado: correção técnica.

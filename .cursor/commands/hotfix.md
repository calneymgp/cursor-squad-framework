# /hotfix - Emergency Fix

## Overview
Caminho crítico para correções de alta severidade (S1/S2) que não podem esperar o ciclo normal.

## Protocolo de Execução
### 1. Input Obrigatório
- Ticket ID do Bug (S1/S2).

### 2. Pré-condição (Gates)
- **Autorização**: Apenas o Tech Lead pode autorizar um `/hotfix`.
- **Fase**: Emergência.

### 3. Ações
1. **Quick Fix**: Implementação direta da correção.
2. **Validation**: QA Verifier deve validar em tempo real.
3. **Rollback Plan**: Tech Lead deve ter um plano de reversão pronto.
4. **Postmortem**: Agendamento de análise de causa raiz após o fix.

### 4. Output Obrigatório
- Correção aplicada e validada.
- Registro de Postmortem pendente no Plane.

### 5. Próximo Estado
- Deploy imediato e `/ship` acelerado.

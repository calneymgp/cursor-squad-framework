---
name: plane-workflow
description: Como gerenciar o ciclo de vida dos tickets no Plane.so.
---
# Skill: Plane Workflow

## De Spec para Tickets
1. **Epic**: Crie um Epic para a feature completa (ex: "Sistema de Login").
2. **Issues**: Quebre em issues técnicas:
   - [FE] UI da página de login
   - [BE] Step de autenticação
   - [DB] Tabela de perfis + RLS
   - [QA] Testes de fluxo de login

## Atualização de Status
- `Backlog` -> `Todo` -> `In Progress` -> `Done`.
- Use comentários para registrar decisões técnicas.
- **Sempre defina a Prioridade** com base no impacto no negócio (veja `docs/PLANE_STANDARDS.md`).

## Labels Mandatórias
Toda issue deve ter pelo menos uma label de cada grupo principal:
1. **Area** (ex: `frontend`, `backend`)
2. **Type** (ex: `bug`, `feature`)

## Template de Issue (Descrição)
Ao criar issues, use o template:
```markdown
## 🎯 Objetivo
...
## 💼 Impacto no Negócio
...
## ✅ DoD
- [ ] ...
```

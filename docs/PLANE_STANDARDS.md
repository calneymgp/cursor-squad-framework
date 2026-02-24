# Plane Standards - Software House Edition

Este documento define os padrões de uso do Plane.so baseados na filosofia "Infrastructure as Code" do Plane Compose, adaptados para nossa Software House.

## 0. Projeto Padrão (Source of Truth)
- **Nome**: DEFAULT_PROJECT
- **Identificador**: `DEFAULT_PROJECT`
- **Workspace**: `YOUR_WORKSPACE_ID`

## 1. Prioridades e Impacto no Negócio

Toda tarefa deve ter sua prioridade definida com base no impacto real no negócio:

| Prioridade | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Urgent** | Bloqueador crítico. Impede o funcionamento principal ou vendas. | Erro 500 no checkout, falha de segurança. |
| **High** | Impacto alto na UX ou em metas contratuais. | Feature principal do sprint, bug visual em página de vendas. |
| **Medium** | Melhoria necessária ou débito técnico que atrasa o time. | Refatoração de componente complexo, melhoria de performance. |
| **Low** | Ajustes cosméticos ou desejáveis (nice-to-have). | Mudança de cor secundária, ajuste de log. |
| **None** | Ideias em triagem ou tarefas sem prazo definido. | Exploração de nova biblioteca. |

## 2. Fluxo de Trabalho (States)

Sempre utilize os estados padrão para manter a visibilidade do progresso:

- **Backlog**: Ideias e tarefas planejadas, mas ainda não prontas para execução.
- **Todo**: Próximas tarefas a serem iniciadas (Sprint atual).
- **In Progress**: Tarefas em execução ativa.
- **Done**: Tarefa concluída e validada (DoD atingido).
- **Cancelled**: Tarefas que perderam o sentido ou foram substituídas.

## 3. Estrutura de Labels (Taxonomia)

Baseado no Plane Compose, organizamos as labels em grupos para facilitar filtros e relatórios:

### Grupo: Area (Onde?)
- `frontend`: Mudanças na UI/UX.
- `backend`: Lógica de negócio, APIs.
- `infrastructure`: Docker, CI/CD, Coolify.
- `database`: Esquemas, Migrations, RLS.

### Grupo: Type (O quê?)
- `bug`: Correção de erro.
- `feature`: Nova funcionalidade.
- `analysis`: Pesquisa, POC ou descoberta.
- `refactor`: Melhoria de código sem mudança de função.

### Grupo: Context (Contexto)
- `auth`: Autenticação e Segurança.
- `payment`: Integrações financeiras.
- `core`: Lógica central do sistema.

## 4. Template de Documentação de Task

Ao criar uma task, utilize o seguinte padrão na descrição:

```markdown
## 🎯 Objetivo
[Descrição clara do que deve ser alcançado]

## 💼 Impacto no Negócio
[Justificativa para a prioridade escolhida]

## ✅ Definition of Done (DoD)
- [ ] Item 1
- [ ] Item 2
- [ ] Passar nos Quick Tests (Lint/Type)

## 🔗 Referências
[Links para designs, documentação ou conversas]
```

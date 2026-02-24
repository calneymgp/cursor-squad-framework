---
name: motia-steps
description: Template e padrões para criação de Motia Steps.
---
# Skill: Motia Steps

## Estrutura de um Step
```typescript
export const myStep = {
  config: {
    name: 'myStep',
    input: z.object({ ... }),
  },
  handler: async (input, ctx) => {
    // Lógica aqui
  }
}
```

## Boas Práticas
- Mantenha Steps pequenos e focados.
- Use `ctx.log` para observabilidade.
- Trate exceções e retorne mensagens claras.

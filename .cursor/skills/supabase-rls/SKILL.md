---
name: supabase-rls
description: Guia rápido para implementar segurança RLS.
---
# Skill: Supabase RLS

## Template de Política
```sql
-- Habilitar RLS
ALTER TABLE minha_tabela ENABLE ROW LEVEL SECURITY;

-- Política de Leitura
CREATE POLICY "Usuários podem ver seus próprios dados" 
ON minha_tabela FOR SELECT 
USING (auth.uid() = user_id);
```

## Checklist
- Todas as tabelas têm RLS?
- Existe política para Insert/Update?
- O `user_id` está sendo validado contra `auth.uid()`?

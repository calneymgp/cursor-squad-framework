# /exec_infra - Infrastructure & DevOps

## Overview
Aciona o especialista em **Infra/DevOps** (@.cursor/agents/infra_devops.md) para tarefas de ambiente.

## Protocolo de Execução
### 1. Input Obrigatório
- Necessidade específica (Deploy, Env Var, Docker).

### 2. Skills Requeridas
- `@.cursor/skills/coolify-deploy/SKILL.md` (Checklist de infra)

### 2. Pré-condição (Gates)
- **Coolify/Cloudflare**: Acesso aos ambientes configurado.
- **Secrets**: Variáveis sensíveis disponíveis.

### 3. Ações
1. **Docker**: Ajustes em Dockerfiles ou docker-compose.
2. **Deploy**: Configuração de webhooks ou scripts de deploy.
3. **Monitoring**: Setup de logs e observabilidade.

### 4. Output Obrigatório
- Configuração de infra testada e documentada no ticket do Plane.

### 5. Próximo Estado
- Pronto para `/ship`.

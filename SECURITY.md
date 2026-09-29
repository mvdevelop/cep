# Segurança

## Princípios

- Não commitamos tokens, senhas ou chaves privadas.
- Variáveis `VITE_*` são públicas no bundle do frontend e não podem conter segredos.
- Dados de conteúdo são validados antes de serem consumidos pela interface.
- Comentários armazenados no navegador são tratados como dados não confiáveis.
- O CI executa typecheck, lint, build e auditoria de dependências.

## Comunicação de vulnerabilidades

Para reportar uma vulnerabilidade, abra uma issue sem incluir dados sensíveis ou utilize um canal privado mantido pelos responsáveis pelo projeto.

## Limitações

Este projeto é atualmente uma SPA estática sem backend, autenticação ou processamento de dados pessoais em servidor. Controles como JWT, RBAC, MFA e rate limiting devem ser implementados no backend antes de adicionar essas funcionalidades.

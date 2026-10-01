# Segurança

## Princípios

- Não commitamos tokens, senhas ou chaves privadas.
- Variáveis `VITE_*` são públicas no bundle do frontend e não podem conter segredos.
- Dados de conteúdo são validados antes de serem consumidos pela interface.
- Comentários armazenados no navegador são tratados como dados não confiáveis.
- O CI executa typecheck, lint, build e auditoria de dependências.

## Comunicação de vulnerabilidades

Para reportar uma vulnerabilidade, abra uma issue sem incluir dados sensíveis ou utilize um canal privado mantido pelos responsáveis pelo projeto.

## Controles implementados

- TypeScript em modo estrito, validação runtime do conteúdo e testes automatizados.
- Comentários locais limitados a 500 caracteres, tratados como texto e protegidos contra JSON corrompido ou indisponibilidade do armazenamento.
- Política de segurança HTTP configurada para desenvolvimento e preview pelo Vite: CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.
- CI com typecheck, lint, testes, cobertura, auditoria de dependências e CodeQL.
- Nenhum HTML arbitrário é renderizado e nenhuma variável `VITE_*` deve conter segredo.

## Limitações

Este projeto é atualmente uma SPA estática sem backend, autenticação ou processamento de dados pessoais em servidor. Controles como JWT, RBAC, MFA e rate limiting devem ser implementados no backend antes de adicionar essas funcionalidades.

A CSP do `vite.config.ts` é adequada para desenvolvimento e preview local. O ambiente de produção deve aplicar headers equivalentes no CDN/servidor de hospedagem, com `script-src` endurecido conforme a estratégia de build. HSTS só deve ser ativado quando o domínio estiver servido exclusivamente por HTTPS.

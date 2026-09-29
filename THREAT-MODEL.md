# Threat model (STRIDE) — CEP

## Escopo

SPA estática com conteúdo educacional local, busca client-side e comentários armazenados no `localStorage` do navegador. Não há backend, autenticação ou banco de dados neste escopo.

## Ativos

- Integridade dos arquivos JavaScript e assets publicados;
- Conteúdo educacional;
- Dados locais de comentários do usuário;
- Disponibilidade e reputação do site.

## Ameaças e controles

| Categoria | Cenário | Controle atual | Lacuna/ação futura |
|---|---|---|---|
| Spoofing | Usuário tenta acessar conta | Não existe autenticação | Implementar backend com OAuth2/MFA antes de criar contas |
| Tampering | Bundle ou asset alterado no deploy | CI, revisão e build automatizado | HTTPS, proteção da infraestrutura e artefatos assinados |
| Repudiation | Comentário publicado sem auditoria | Comentários são locais e não são enviados ao servidor | Auditoria somente se houver backend |
| Information disclosure | Segredo em variável `VITE_*` | `.env.example`, `.gitignore` e documentação | Secret manager no backend |
| Denial of service | Tráfego excessivo | CDN/hosting deve fornecer proteção | Rate limiting e WAF no backend |
| Elevation of privilege | Usuário tenta acessar função administrativa | Não existem funções administrativas | RBAC/ABAC no backend futuro |
| XSS | Conteúdo malicioso em comentários | React renderiza texto e não usa HTML cru; JSON/localStorage são validados | Manter CSP e evitar `dangerouslySetInnerHTML` |

## Critérios de segurança

- O frontend nunca deve armazenar segredos;
- Dados externos devem ser tratados como não confiáveis;
- Mudanças passam por typecheck, lint, testes, auditoria e CodeQL;
- A aplicação deve manter uma política de Content Security Policy no ambiente de produção;
- Funcionalidades de conta exigem backend, autenticação forte, autorização e proteção contra abuso.

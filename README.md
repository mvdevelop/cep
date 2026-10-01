# CEP — Copa do Ensino Público

SPA educacional para organizar conteúdos de reforço escolar para estudantes da rede pública.

## Stack

- Vite 6 + React 19
- TypeScript em modo `strict` e TSX
- React Router 7
- Tailwind CSS 4 e React Bootstrap
- Vitest + Testing Library
- ESLint 9

A aplicação é estática: o conteúdo é carregado de um JSON local e validado em runtime. Não existe backend, autenticação ou coleta de dados em servidor.

## Executar localmente

```bash
npm install
npm run dev
```

Comandos de qualidade:

```bash
npm run typecheck
npm run lint
npm test
npm run coverage
npm run build
npm audit --audit-level=high
```

## Estrutura

```text
src/
├── components/   # Navbar, comentários e rodapé
├── data/         # Conteúdo local e validação runtime
├── pages/        # Home, busca, temporadas e extras
├── types/        # Contratos TypeScript
├── App.tsx       # Rotas da SPA
└── main.tsx      # Ponto de entrada
```

Rotas principais:

- `/` — página inicial e catálogo;
- `/search?q=termo` — busca por nome e descrição;
- `/season/:id` — leitura paginada de um conteúdo.

## Segurança e privacidade

- `VITE_*` nunca deve conter segredos, pois valores públicos são incorporados ao bundle.
- Conteúdo e comentários são tratados como dados não confiáveis e não são renderizados como HTML arbitrário.
- Comentários ficam apenas no armazenamento local do navegador; não há conta, autenticação ou processamento em servidor.
- JWT, RBAC, MFA, rate limiting e controles de banco de dados pertencem a um backend futuro e não são simulados no frontend.
- Consulte [`SECURITY.md`](SECURITY.md) e [`THREAT-MODEL.md`](THREAT-MODEL.md).

## CI/CD

O workflow do GitHub Actions executa typecheck, lint, testes, cobertura, build, auditoria de dependências e verificações de segurança apropriadas ao frontend.

## Contribuição

```bash
git checkout -b minha-feature
npm run typecheck && npm run lint && npm test
```

Abra um Pull Request descrevendo a motivação, os testes executados e eventuais impactos de segurança.

## Licença

Este projeto está sob a licença MIT.

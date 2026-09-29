# Arquitetura

## Visão geral

O CEP é uma SPA React compilada pelo Vite. A aplicação possui três rotas principais:

- `/`: página inicial, carrossel, conteúdo e seções informativas;
- `/search?q=...`: busca client-side no conteúdo local;
- `/season/:id`: leitura paginada de um conteúdo.

## Camadas

- `src/data/`: fronteira e validação dos dados JSON;
- `src/types/`: contratos TypeScript do domínio;
- `src/pages/`: componentes associados às rotas;
- `src/components/`: componentes reutilizáveis da interface;
- `src/assets/`: imagens empacotadas pelo Vite;
- `src/*.test.tsx`: testes de comportamento e integração leve.

## Decisões

- TypeScript estrito reduz falhas em runtime e documenta contratos;
- Conteúdo inválido é rejeitado na entrada, antes da renderização;
- Comentários permanecem locais até existir backend com controles LGPD, autenticação e auditoria;
- React renderiza texto, não HTML arbitrário, reduzindo risco de XSS.

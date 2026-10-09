# Mosaic Labs

Site institucional da Mosaic Labs, um estúdio independente de software e produtos digitais.

- Site: https://mosaic-labs.co
- Primeiro produto: [Lessonara](https://lessonara.mosaic-labs.co)
- Contato: contact@mosaic-labs.co
- Slogan: Build Ideas Together

O site apresenta a marca, seus produtos e princípios. A versão final está na branch `main`.

## Stack

Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4. As animações usam Motion e os ícones usam Phosphor.

O projeto não exige banco de dados nem variáveis de ambiente. O contato abre o aplicativo de e-mail por um link `mailto:`.

## Desenvolvimento local

Requisitos: Node.js **20.9 ou superior** e npm. As dependências estão fixadas em `package-lock.json`.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000/pt-br. O servidor usa a porta 3000 por padrão.

Para validar a versão de produção:

```sh
npm run build
```

Para servir o build localmente, depois de compilá-lo:

```sh
npm run start
```

Se você trocar entre commits com estruturas de rotas diferentes e encontrar erros em tipos gerados em `.next`, pare o servidor, remova somente esse diretório de cache e execute o build novamente.

## Publicação na Vercel

Importe `mosaiclabsco/website` com estas configurações:

| Configuração | Valor |
| --- | --- |
| Production Branch | `main` |
| Application / Framework Preset | `Next.js` |
| Root Directory | `./` |
| Build, Output e Install | Padrões do preset, sem overrides |
| Environment Variables | Nenhuma obrigatória |

Para conectar `mosaic-labs.co`, adicione o domínio ao projeto na Vercel e configure na Cloudflare os registros apresentados pela Vercel. Não há infraestrutura ou DNS administrados por este repositório.

## Idiomas e SEO

| Idioma | Rota | Arquivo de tradução |
| --- | --- | --- |
| Inglês | `/en` | `lib/dictionaries/en.json` |
| Português brasileiro | `/pt-br` | `lib/dictionaries/pt-br.json` |
| Francês | `/fr` | `lib/dictionaries/fr.json` |
| Espanhol | `/es` | `lib/dictionaries/es.json` |

A raiz `/` redireciona para `/en`. O seletor de idioma preserva a seção atual. Cada idioma tem título, descrição, idioma do HTML, URL canônica e links para as outras traduções. O sitemap e o robots são gerados pelo Next.js.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Nome, domínio, e-mail e catálogo de produtos | `lib/site.ts` |
| Textos, status dos produtos e metadados traduzidos | `lib/dictionaries/*.json` |
| Estrutura e composição das seções | `components/studio-page.tsx` |
| Tema, fontes, responsividade e estilos principais | `app/globals.css` |
| Separadores, princípios, contato, rodapé e identidade do Lessonara | `app/refinements.css` |
| Modelo de interface do Lessonara | `components/lessonara-showcase.tsx` e `app/lessonara-model.css` |
| Logo e elementos originais da Mosaic | `public/brand/`, `lib/official-mark.ts` e `components/mosaic-piece.tsx` |

Para adicionar um produto:

1. Adicione seu registro em `products`, em `lib/site.ts`, com um `slug` único, nome e destino.
2. Adicione o mesmo `slug` em `products.catalog` nos **quatro** arquivos de tradução. Inclua os campos do produto existente como referência.
3. Se necessário, crie uma apresentação própria para o produto em `components/studio-page.tsx`. A apresentação do Lessonara é específica dele.
4. Execute `npm run build` para conferir os tipos e a geração das quatro páginas.

Os textos exibidos dos produtos vêm das traduções. Alterar apenas os campos de texto do registro em `lib/site.ts` não atualiza as descrições localizadas da página.

## Identidade e comportamento

- A logo original da Mosaic é preservada. As cores do símbolo são `#1464C0`, `#EF6545`, `#F4B942` e `#0B9E8A`.
- Clash Grotesk nos títulos e Satoshi nos textos e controles. A tipografia do wordmark permanece na imagem original fornecida.
- O Lessonara usa sua própria logo, fonte Geist e verde `#3E7163`. Sua prévia é um modelo conceitual de organização de aulas, traduzido nos quatro idiomas.
- Fontes locais em `public/fonts/`.
- Modos claro e escuro seguem a preferência do sistema até o visitante escolher outro tema; a escolha fica salva no navegador.
- As animações respeitam `prefers-reduced-motion`.

Os arquivos antigos em `public/images/` foram mantidos como material de referência e não são exibidos na página atual.

## Estado do repositório

Há uma única branch ativa, `main`, e uma única pasta local de trabalho: `/Users/gabriel/projects/mosaic-labs`. As worktrees e branches de comparação foram removidas. Os desenhos anteriores continuam acessíveis pelo histórico normal do Git.

A direção final foi construída com a identidade fornecida e as referências visuais do briefing, com apoio do [Taste Skill](https://github.com/Leonxlnx/taste-skill). O conteúdo deve continuar transparente sobre o estágio dos produtos, sem inventar clientes, depoimentos ou métricas.

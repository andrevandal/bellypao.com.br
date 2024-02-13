# bellypao.com.br

```sh
git clone https://github.com/andrevandal/bellypao.com.br.git
```

## Tech

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## How add icons?

This project uses manually generated SVG Sprite as a way to handle icons.

Frist, to add an icon, simply create a new `.svg` file in `src/assets/icons/`.

Based on the same `.svg`, create an `<symbol>` element in `public/images/icons.svg`. Follow the example of others icons there. After the icon name is choosen and set as `id` of the `<symbol>`, add the icon name at `AvailableIcons` in `src/types.ts`.

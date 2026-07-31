# Informe de avances

Static site built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).
It presents project status, delivered work and next steps for a non-technical audience.

## Commands

```sh
pnpm install
pnpm run dev      # dev server on localhost:4321
pnpm run build    # static build into dist/
pnpm run preview  # preview the production build
```

## Content

| Path | Page |
| --- | --- |
| `src/content/docs/index.mdx` | Landing |
| `src/content/docs/estado/resumen.md` | Current status |
| `src/content/docs/entregado/modulos.md` | Delivered work, by module |
| `src/content/docs/en-curso.md` | Work in progress |
| `src/content/docs/proximos-pasos.md` | Next steps |

Page content is written in Spanish because that is the audience's language. Code, configuration and
comments stay in English.

## Writing rules

The audience is non-technical. Two rules govern every edit:

1. **Describe the user-visible effect, never the implementation.** No file paths, package names or
   library names.
2. **Name each module the way the product names it**, using the exact wording the application shows
   in its own navigation rather than an invented translation.

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The workflow reads the published URL and subpath from the Pages
configuration and passes them to the build as `SITE_URL` and `BASE_PATH`, so the same source builds
correctly both locally (served from `/`) and on Pages (served from a subpath).

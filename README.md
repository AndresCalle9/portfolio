# Portafolio · Andrés Calle Uribe

Sitio estático en Astro, bilingüe (ES/EN), publicado en GitHub Pages.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321/portfolio/
npm run build
```

## Editar contenido

- Todo el texto del CV está en `src/data/cv.ts` (cada campo tiene `es` y `en`).
- Los textos de interfaz están en `src/i18n/ui.ts`.
- Los PDF del CV están en `public/cv/`.

## Diagramas (Archify)

Las fuentes están en `diagrams/build.mjs`: un solo archivo genera las versiones ES y EN.

```bash
npm run diagrams   # genera candidatos, valida con Archify y copia el HTML a public/diagrams/
```

Hace falta la skill de Archify en `~/.claude/skills/archify` y un Chromium (se usa el de Playwright).

## Despliegue

Con cada push a `main`, `.github/workflows/deploy.yml` construye y publica el sitio.
En GitHub: Settings → Pages → Source: **GitHub Actions**.

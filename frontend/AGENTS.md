# Tripcket - Agentes y Reglas de Desarrollo

## Stack Tecnológico
- **Frontend**: Astro + Tailwind CSS
- **Icons**: astro-icon con heroicons (`heroicons:nombre-icono`)
- **Animaciones**: AOS (Animate On Scroll)
- **CMS**: Sanity (Headless)
- **Runtime**: Bun

## Arquitectura CMS - ContenidoEditable

### Estructura de Datos

Todo el contenido editable del sitio se gestiona desde Sanity CMS. Los componentes reciben datos como props y usan valores por defecto cuando el CMS no está configurado.

```
src/lib/
  sanity.ts          → Cliente Sanity
  queries.ts         → GROQ queries
  defaultData.ts     → Datos por defecto (fallback)
  fetchSanity.ts     → Fetch en cliente (live updates)

src/pages/
  index.astro        → Página principal (carga datos del CMS)
  api/content.ts     → API endpoint para contenido

src/components/
  *.astro            → Componentes UI (estilos, no contenido)
  LiveContent.astro  → Actualización en tiempo real desde CMS
```

### Actualización en Tiempo Real

El sitio obtiene datos de Sanity directamente desde el navegador (cliente). No requiere redeploy cuando cambia contenido en CMS.

```
Flujo:
1. Página carga con datos por defecto (build time)
2. JavaScript hace fetch a Sanity API
3. Actualiza navbar, hero y otros componentes
4. Usuario ve contenido actualizado sin recargar
```

### Schemas de Sanity (CMS Editable)

| Schema | Descripción | Campos Editables |
|--------|-------------|-----------------|
| `siteSettings` | Config global | Logo, navbar, footer, socials |
| `hero` | Hero principal | Título, subtítulo, botones CTA, badge, imagen |
| `feature` | Características | Icono, título, descripción |
| `problem` | Problemas | Icono, texto |
| `solution` | Solución | Título, descripción, bullets, botones, imagen |
| `processStep` | Pasos | Número, título, descripción |
| `personalization` | Personalización | Título, descripción, botón, imagen |
| `travelerType` | Tipos de viajero | Título, descripción, imagen |
| `destination` | Destino | Título, subtítulo, descripción, bullets, botones, imagen |
| `earlyAccess` | Acceso anticipado | Título, subtítulo, placeholder, botón |
| `expansionFeature` | Features expansión | Icono, título, texto |
| `expansion` | Expansión | Pre-título, título, descripción, botones |
| `benefit` | Beneficios | Título, descripción, botón, imagen |
| `impact` | Impacto | Icono, título, descripción |
| `testimonial` | Testimonios | Cita, autor, ubicación |

## Reglas para Contenido

### 1. NO hardcodear contenido
- ❌ NO escribir texto directamente en componentes
- ✅ Usar props con valores por defecto
- ✅ Todo contenido debe poder cambiarse desde Sanity

### 2. Estructura de Componentes
```astro
---
interface Props {
  data?: {
    title?: string;
    description?: string;
    items?: Array<{...}>;
  };
}

const { data } = Astro.props;
const title = data?.title || 'Valor por defecto';
---

<section>
  <h1>{title}</h1>
  {/* renderizar contenido del CMS */}
</section>
```

### 3. Iconos de Heroicons
Usar el prefijo `heroicons:` con el componente `<Icon />`:
```astro
import { Icon } from 'astro-icon/components';
<Icon name="heroicons:briefcase" class="w-6 h-6" />
```

Iconos disponibles en heroicons: `briefcase`, `map`, `sparkles`, `banknotes`, `user-group`, `arrow-right`, `chevron-down`, `star`, `user`, `heart`, `shield-check`, `photo`

## URLs del Sitio

| URL | Página |
|-----|--------|
| `/` | Inicio (Landing) |
| `/blog` | Blog |
| `/destinos` | Destinos |
| `/experiencias` | Experiencias |
| `/empresa` | Sobre nosotros |
| `/contacto` | Contacto |
| `/ingresar` | Login |
| `/crear` | Registro |
| `/ejemplo` | Ejemplo de Tripcket |

## Configuración de Entorno

Crear `.env` con:
```
PUBLIC_SANITY_PROJECT_ID=tu-project-id
PUBLIC_SANITY_DATASET=production
```

## Workflow de Desarrollo

1. **Estilos/UI** → Modificar componentes `.astro`
2. **Contenido** → Modificar en Sanity Studio (el jefe)
3. **Nuevos campos** → Agregar schema en `sanity/schemas/`

## Setup Sanity Studio

1. Crear proyecto en sanity.io
2. Obtener `projectId`
3. Configurar `.env`
4. Correr `sanity dev` para Studio local
5. Poblar contenido en Sanity Studio

## Notas Importantes

- Los componentes son "tontos" - solo renderizan props
- Los datos vienen del CMS o usan fallback
- Si Sanity no está configurado, usa `defaultData.ts`
- Los iconos van en SVG inline, no como imagen
- Animaciones con `data-aos="fade-up"` etc.
- Cursor debe ser visible (no `cursor: none`)

### Validación de Datos del CMS

**IMPORTANTE**: Cuando se reciben datos del CMS, SIEMPRE validar que estén completos antes de usar. Si faltan campos, usar fallbacks de `defaultData.ts`.

```javascript
// Ejemplo de validación en index.astro:
const hasValidFeatures = sanityData.features && 
  Array.isArray(sanityData.features) && 
  sanityData.features.length > 0 &&
  sanityData.features[0]?.icon;

features: hasValidFeatures ? sanityData.features : defaultData.features;
```

Validar cada sección antes de usar datos del CMS:

| Sección | Validación mínima |
|---------|-------------------|
| `siteSettings` | `navbarLinks?.length > 0` |
| `hero` | `hero?.title` existe |
| `features` | Array con items que tienen `icon` |
| `problems` | Array tiene `length > 0` |
| `solution` | `solution?.title` existe |
| `processSteps` | Array tiene `length > 0` |
| `expansionFeatures` | Array con items que tienen `icon` |
| `benefits` | Array tiene `length > 0` |
| `impacts` | Array tiene `length > 0` |
| `testimonials` | Array tiene `length > 0` |

### Paleta de Colores

Colores principales del sitio:

| Color | Hex | Uso |
|-------|-----|-----|
| Amarillo suave | `#fff7ad` | Fondo gradiente |
| Verde azulado | `#92cdcf` | Fondo gradiente |
| Texto oscuro | `#333` | Botones, texto principal |
| Texto gris | `#666` | Texto secundario |

**Regla**: NO usar naranja (#C4913B, #F7B538) ni texto blanco (#fff) sobre fondos gradiente. El texto debe ser oscuro para legibilidad.

# NexusMetrics — Dashboard de Ventas

Dashboard administrativo desarrollado con HTML5 semántico, CSS3, CSS Grid y Flexbox como entrega de la **Actividad 3 — Taller práctico: CSS3, Flexbox y Grid**.

---

## Descripción

NexusMetrics es un dashboard de analítica y gestión de ventas que permite visualizar métricas clave del negocio en tiempo real. Incluye tarjetas de resumen, un gráfico de barras mensual con línea de meta, un ranking de los productos más vendidos y una tabla de transacciones recientes. El diseño sigue una estética dark mode con tipografía expresiva y micro-animaciones CSS.

---

## Estructura del proyecto

```
dashboard/
├── index.html           Documento principal (HTML5 semántico)
├── css/
│   ├── variables.css    Custom properties, reset base y accesibilidad
│   ├── layout.css       Grid principal, sidebar, header, footer y overlay
│   ├── components.css   Cards, gráfico, top productos, tabla y animaciones
│   └── responsive.css   Media queries (tablet, móvil, móvil pequeño)
├── assets/              Recursos estáticos adicionales
└── README.md
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica con `<main>`, `<aside>`, `<header>`, `<footer>`, `<article>`, `<section>` |
| CSS Grid | Layout principal del dashboard y sección central (gráfico + top productos) |
| CSS Flexbox | Componentes internos: cards, nav, header, tabla, barras de progreso |
| CSS Custom Properties | Variables de color, tipografía, espaciado y radios |
| CSS Animations | `@keyframes` para entrada de tarjetas y crecimiento de barras |
| Media Queries | Responsividad en escritorio, tablet (768–1024px) y móvil (< 768px) |
| WAI-ARIA | Roles, `aria-label`, `aria-current`, `aria-expanded`, `role="progressbar"` |
| Google Fonts | Syne (títulos) + DM Sans (cuerpo) |

---

## Layout principal

El layout usa CSS Grid con áreas nombradas. El sidebar vive fuera del flujo del grid con `position: fixed`; el contenido principal ocupa el espacio restante.

```css
.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: var(--header-h) 1fr var(--footer-h);
  margin-left: var(--sidebar-w);
}
```

Los componentes internos (cards, nav, header, filas de tabla) usan Flexbox para su alineación, separando responsabilidades: Grid para la macro-estructura, Flexbox para la micro-distribución.

---

## Responsividad

| Breakpoint | Comportamiento |
|---|---|
| > 1024px | Layout completo, sidebar de 260px, cards en 4 columnas |
| 768 – 1024px | Sidebar de 220px, cards en 2 columnas, sección central apilada |
| < 768px | Sidebar oculto (panel deslizable con overlay), cards en 1 columna, header compacto |
| < 480px | Botones del header reducidos, subtítulo oculto |

---

## Accesibilidad

| Práctica | Implementación |
|---|---|
| Roles ARIA | `role="navigation"`, `role="main"`, `role="banner"`, `role="contentinfo"`, `role="search"`, `role="tablist"`, `role="progressbar"` |
| Etiquetas descriptivas | `aria-label` en botones, íconos y regiones |
| Estado activo | `aria-current="page"` en el ítem activo del menú |
| Estado del menú | `aria-expanded` actualizado dinámicamente con JavaScript |
| Contraste | Texto principal `#e8eaf0` sobre `#151820`, ratio superior a 7:1 |
| Foco visible | `:focus-visible` con outline verde en todos los elementos interactivos |
| Screen readers | Clase `.sr-only` en caption de tabla y labels ocultos |
| SVG decorativos | `aria-hidden="true"` en íconos sin valor semántico |

---

## Capturas de pantalla

Las capturas en escritorio, tablet y móvil se encuentran en la carpeta `/evidencias`.

---

## Decisiones de diseño

**Dark mode.** Se eligió una paleta oscura porque los dashboards se usan en sesiones prolongadas de trabajo. El verde menta como acento crea alto contraste sin cansar la vista y mantiene coherencia visual en todos los estados interactivos.

**Cuatro archivos CSS.** En lugar de un único archivo monolítico, los estilos se dividen por responsabilidad: variables y base, estructura de página, componentes y responsividad. Esto facilita la lectura, el mantenimiento y la localización de errores.

**Overlay con `pointer-events`.** El overlay usa `opacity` + `pointer-events` en lugar de `display: none/block` para que las transiciones CSS funcionen correctamente al agregar y quitar clases desde JavaScript.

**Animaciones escalonadas.** Las tarjetas usan `animation-delay` incremental para una entrada progresiva que guía la atención del usuario de izquierda a derecha, sin recurrir a JavaScript.

---

## Instalación

No requiere servidor, npm ni dependencias externas.

```bash
git clone https://github.com/Alejandroesbr/actividad-3.git
cd nexusmetrics-dashboard
```

---

## Referencias

- MDN Web Docs — CSS Grid Layout
- MDN Web Docs — Flexbox
- CSS-Tricks — A Complete Guide to Grid
- Smashing Magazine — Accessible Dashboards
- WAI-ARIA Authoring Practices Guide

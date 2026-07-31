---
title: Línea de tiempo
description: Qué se entregó en los últimos dos meses, qué se está haciendo ahora y qué viene después.
tableOfContents: false
---

Esta vista ordena el trabajo sobre un mismo eje de tiempo: lo entregado en los últimos dos meses,
lo que está en curso hoy, y lo que viene a continuación.

<div class="gantt-legend">
  <span class="gantt-key"><span class="gantt-swatch gantt-swatch--done"></span>Entregado</span>
  <span class="gantt-key"><span class="gantt-swatch gantt-swatch--active"></span>En curso</span>
  <span class="gantt-key"><span class="gantt-swatch gantt-swatch--planned"></span>Próximo</span>
  <span class="gantt-key"><span class="gantt-swatch gantt-swatch--today"></span>Hoy</span>
</div>

<style>
:root { --sl-content-width: 64rem; }

:root {
  --tl-done: #00907C;
  --tl-active: #B8720C;
  --tl-planned: #6C7CC9;
  --tl-grid: var(--sl-color-gray-5);
  --tl-surface: var(--sl-color-bg);
  --tl-label: 236px;
  --tl-datecol: 104px;
  --tl-gap: 12px;
}
:root[data-theme="dark"] {
  --tl-done: #26A88F;
  --tl-active: #BE8330;
  --tl-planned: #7B8ED8;
}

.gantt-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin: 1.5rem 0 1rem;
  font-size: .85rem;
}
.gantt-key { display: inline-flex; align-items: center; gap: 8px; }
.gantt-swatch { width: 22px; height: 10px; border-radius: 3px; flex: none; }
.gantt-swatch--done    { background: var(--tl-done); }
.gantt-swatch--active  { background: var(--tl-active); }
.gantt-swatch--planned { background: var(--tl-planned); }
.gantt-swatch--today   { width: 2px; height: 16px; border-radius: 0; background: var(--sl-color-accent); }

.gantt-scroll { overflow-x: auto; margin: 0 0 1.5rem; padding-bottom: 8px; }
.gantt { min-width: 780px; }

.gantt-headrow,
.gantt-row {
  display: grid;
  grid-template-columns: var(--tl-label) 1fr var(--tl-datecol);
  gap: var(--tl-gap);
  align-items: center;
}

.gantt-months { position: relative; height: 24px; }
.gantt-month {
  position: absolute;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  padding-left: 6px;
  border-left: 1px solid var(--tl-grid);
  font-size: .68rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--sl-color-gray-3);
  white-space: nowrap;
  overflow: hidden;
}

.gantt-body { position: relative; }

.gantt-lane {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--tl-label) + var(--tl-gap));
  right: calc(var(--tl-datecol) + var(--tl-gap));
  pointer-events: none;
}
.gantt-sep {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--tl-grid);
}
.gantt-today {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--sl-color-accent);
  z-index: 2;
}

.gantt-group {
  font-size: .7rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1.4rem 0 .4rem;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--tl-grid);
  position: relative;
  z-index: 3;
  background: var(--tl-surface);
}
.gantt-group--done    { color: var(--tl-done); }
.gantt-group--active  { color: var(--tl-active); }
.gantt-group--planned { color: var(--tl-planned); }

.gantt-name {
  font-size: .8rem;
  line-height: 1.3;
  color: var(--sl-color-white);
  padding: 5px 0;
}

.gantt-track { position: relative; height: 26px; }

.gantt-bar {
  position: absolute;
  top: 7px;
  height: 12px;
  border-radius: 4px;
  min-width: 5px;
  box-shadow: 0 0 0 2px var(--tl-surface);
  z-index: 1;
}
.gantt-bar--done    { background: var(--tl-done); }
.gantt-bar--active  { background: var(--tl-active); }
.gantt-bar--planned { background: var(--tl-planned); }
.gantt-bar:focus-visible { outline: 2px solid var(--sl-color-accent); outline-offset: 3px; }

.gantt-tip {
  position: absolute;
  bottom: 20px;
  left: 0;
  z-index: 5;
  display: none;
  background: var(--sl-color-gray-6);
  border: 1px solid var(--tl-grid);
  border-radius: 4px;
  padding: 7px 10px;
  font-size: .78rem;
  line-height: 1.4;
  color: var(--sl-color-white);
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(0, 0, 0, .18);
}
.gantt-tip b { display: block; font-weight: 600; opacity: .75; font-size: .72rem; }
.gantt-bar:hover .gantt-tip,
.gantt-bar:focus-visible .gantt-tip { display: block; }

.gantt-dates {
  font-size: .7rem;
  font-variant-numeric: tabular-nums;
  color: var(--sl-color-gray-3);
  white-space: nowrap;
}

@media (max-width: 800px) {
  :root { --tl-label: 180px; --tl-datecol: 92px; }
  .gantt-name { font-size: .76rem; }
}
</style>

<div class="gantt-scroll">
<div class="gantt">
  <div class="gantt-headrow">
    <span class="gantt-name"></span>
    <span class="gantt-months">
      <span class="gantt-month" style="left:0.000%;width:19.608%">Junio</span>
      <span class="gantt-month" style="left:19.608%;width:20.261%">Julio</span>
      <span class="gantt-month" style="left:39.869%;width:20.261%">Agosto</span>
      <span class="gantt-month" style="left:60.131%;width:19.608%">Septiembre</span>
      <span class="gantt-month" style="left:79.739%;width:20.261%">Octubre</span>
    </span>
    <span class="gantt-dates"></span>
  </div>
  <div class="gantt-body">
    <span class="gantt-lane" aria-hidden="true">
      <span class="gantt-sep" style="left:19.608%"></span>
      <span class="gantt-sep" style="left:39.869%"></span>
      <span class="gantt-sep" style="left:60.131%"></span>
      <span class="gantt-sep" style="left:79.739%"></span>
      <span class="gantt-today" style="left:38.562%"></span>
    </span>
    <p class="gantt-group gantt-group--done">Entregado</p>
    <div class="gantt-row">
      <span class="gantt-name">Permisos y roles de usuario</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:0.000%;width:3.268%" tabindex="0"><span class="gantt-tip">Permisos y roles de usuario<b>1 jun → 5 jun</b></span></span></span>
      <span class="gantt-dates">1 jun → 5 jun</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Correcciones en flujos EPT-1, Fosa y Fiscalización</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:0.654%;width:4.575%" tabindex="0"><span class="gantt-tip">Correcciones en flujos EPT-1, Fosa y Fiscalización<b>2 jun → 8 jun</b></span></span></span>
      <span class="gantt-dates">2 jun → 8 jun</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Navegación: rastro de ubicación en la app</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:0.654%;width:5.882%" tabindex="0"><span class="gantt-tip">Navegación: rastro de ubicación en la app<b>2 jun → 10 jun</b></span></span></span>
      <span class="gantt-dates">2 jun → 10 jun</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Medición de Pozos: pantallas base del flujo</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:4.575%;width:11.111%" tabindex="0"><span class="gantt-tip">Medición de Pozos: pantallas base del flujo<b>8 jun → 24 jun</b></span></span></span>
      <span class="gantt-dates">8 jun → 24 jun</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Historial de Reportes: correcciones de visualización</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:10.458%;width:5.229%" tabindex="0"><span class="gantt-tip">Historial de Reportes: correcciones de visualización<b>17 jun → 24 jun</b></span></span></span>
      <span class="gantt-dates">17 jun → 24 jun</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Mejoras en el entorno de desarrollo</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:15.686%;width:9.150%" tabindex="0"><span class="gantt-tip">Mejoras en el entorno de desarrollo<b>25 jun → 8 jul</b></span></span></span>
      <span class="gantt-dates">25 jun → 8 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Panel de administración: PDN y Plan Diario</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:22.876%;width:5.229%" tabindex="0"><span class="gantt-tip">Panel de administración: PDN y Plan Diario<b>6 jul → 13 jul</b></span></span></span>
      <span class="gantt-dates">6 jul → 13 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Publicación automática por módulo</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:28.758%;width:8.497%" tabindex="0"><span class="gantt-tip">Publicación automática por módulo<b>15 jul → 27 jul</b></span></span></span>
      <span class="gantt-dates">15 jul → 27 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Notificaciones: sección, avisos y enlaces</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:27.451%;width:7.190%" tabindex="0"><span class="gantt-tip">Notificaciones: sección, avisos y enlaces<b>13 jul → 23 jul</b></span></span></span>
      <span class="gantt-dates">13 jul → 23 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Medición de Pozos: campos y filtros</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:27.451%;width:5.882%" tabindex="0"><span class="gantt-tip">Medición de Pozos: campos y filtros<b>13 jul → 21 jul</b></span></span></span>
      <span class="gantt-dates">13 jul → 21 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Controles automáticos de calidad</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:32.026%;width:5.229%" tabindex="0"><span class="gantt-tip">Controles automáticos de calidad<b>20 jul → 27 jul</b></span></span></span>
      <span class="gantt-dates">20 jul → 27 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Medición de Pozos: parámetros y pantalla final</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:32.680%;width:2.614%" tabindex="0"><span class="gantt-tip">Medición de Pozos: parámetros y pantalla final<b>21 jul → 24 jul</b></span></span></span>
      <span class="gantt-dates">21 jul → 24 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Red de pruebas automáticas</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:33.333%;width:3.922%" tabindex="0"><span class="gantt-tip">Red de pruebas automáticas<b>22 jul → 27 jul</b></span></span></span>
      <span class="gantt-dates">22 jul → 27 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Campos obligatorios y ajustes de medición</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--done" style="left:36.601%;width:1.961%" tabindex="0"><span class="gantt-tip">Campos obligatorios y ajustes de medición<b>27 jul → 29 jul</b></span></span></span>
      <span class="gantt-dates">27 jul → 29 jul</span>
    </div>
    <p class="gantt-group gantt-group--active">En curso</p>
    <div class="gantt-row">
      <span class="gantt-name">Unificación de la comunicación con el servidor</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--active" style="left:32.026%;width:16.993%" tabindex="0"><span class="gantt-tip">Unificación de la comunicación con el servidor<b>20 jul → 14 ago</b></span></span></span>
      <span class="gantt-dates">20 jul → 14 ago</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Ajustes en carga y descarga de Vacuum</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--active" style="left:33.333%;width:11.111%" tabindex="0"><span class="gantt-tip">Ajustes en carga y descarga de Vacuum<b>22 jul → 7 ago</b></span></span></span>
      <span class="gantt-dates">22 jul → 7 ago</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Versión de pruebas en su propio ambiente</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--active" style="left:37.255%;width:2.614%" tabindex="0"><span class="gantt-tip">Versión de pruebas en su propio ambiente<b>28 jul → 31 jul</b></span></span></span>
      <span class="gantt-dates">28 jul → 31 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Informe de avances</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--active" style="left:37.908%;width:1.961%" tabindex="0"><span class="gantt-tip">Informe de avances<b>29 jul → 31 jul</b></span></span></span>
      <span class="gantt-dates">29 jul → 31 jul</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Documentación pendiente</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--active" style="left:38.562%;width:4.575%" tabindex="0"><span class="gantt-tip">Documentación pendiente<b>30 jul → 5 ago</b></span></span></span>
      <span class="gantt-dates">30 jul → 5 ago</span>
    </div>
    <p class="gantt-group gantt-group--planned">Próximo</p>
    <div class="gantt-row">
      <span class="gantt-name">Corrección de los 5 errores detectados por las pruebas</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:45.752%;width:7.843%" tabindex="0"><span class="gantt-tip">Corrección de los 5 errores detectados por las pruebas<b>10 ago → 21 ago</b></span></span></span>
      <span class="gantt-dates">10 ago → 21 ago</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Enlaces directos en notificaciones</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:50.327%;width:7.843%" tabindex="0"><span class="gantt-tip">Enlaces directos en notificaciones<b>17 ago → 28 ago</b></span></span></span>
      <span class="gantt-dates">17 ago → 28 ago</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Campo de rol al iniciar sesión</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:54.902%;width:3.268%" tabindex="0"><span class="gantt-tip">Campo de rol al iniciar sesión<b>24 ago → 28 ago</b></span></span></span>
      <span class="gantt-dates">24 ago → 28 ago</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Sincronización que queda en bucle</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:59.477%;width:3.268%" tabindex="0"><span class="gantt-tip">Sincronización que queda en bucle<b>31 ago → 4 sep</b></span></span></span>
      <span class="gantt-dates">31 ago → 4 sep</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Reordenamiento de las pantallas más complejas</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:60.131%;width:30.065%" tabindex="0"><span class="gantt-tip">Reordenamiento de las pantallas más complejas<b>1 sep → 16 oct</b></span></span></span>
      <span class="gantt-dates">1 sep → 16 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Diferenciación visual del ambiente de pruebas</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:60.131%;width:5.229%" tabindex="0"><span class="gantt-tip">Diferenciación visual del ambiente de pruebas<b>1 sep → 8 sep</b></span></span></span>
      <span class="gantt-dates">1 sep → 8 sep</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Paginación en el panel de administración</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:64.052%;width:7.843%" tabindex="0"><span class="gantt-tip">Paginación en el panel de administración<b>7 sep → 18 sep</b></span></span></span>
      <span class="gantt-dates">7 sep → 18 sep</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Nueva vista de reportes en el panel</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:64.052%;width:12.418%" tabindex="0"><span class="gantt-tip">Nueva vista de reportes en el panel<b>7 sep → 25 sep</b></span></span></span>
      <span class="gantt-dates">7 sep → 25 sep</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Pruebas de extremo a extremo en Medición de Pozos</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:68.627%;width:12.418%" tabindex="0"><span class="gantt-tip">Pruebas de extremo a extremo en Medición de Pozos<b>14 sep → 2 oct</b></span></span></span>
      <span class="gantt-dates">14 sep → 2 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Documentación de arquitectura de la plataforma</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:69.281%;width:16.340%" tabindex="0"><span class="gantt-tip">Documentación de arquitectura de la plataforma<b>15 sep → 9 oct</b></span></span></span>
      <span class="gantt-dates">15 sep → 9 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Revisión de seguridad de enlaces en notificaciones</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:73.203%;width:7.843%" tabindex="0"><span class="gantt-tip">Revisión de seguridad de enlaces en notificaciones<b>21 sep → 2 oct</b></span></span></span>
      <span class="gantt-dates">21 sep → 2 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Consolidación de módulos duplicados</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:82.353%;width:16.993%" tabindex="0"><span class="gantt-tip">Consolidación de módulos duplicados<b>5 oct → 30 oct</b></span></span></span>
      <span class="gantt-dates">5 oct → 30 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Capa intermedia de datos</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:86.928%;width:13.072%" tabindex="0"><span class="gantt-tip">Capa intermedia de datos<b>12 oct → 31 oct</b></span></span></span>
      <span class="gantt-dates">12 oct → 31 oct</span>
    </div>
    <div class="gantt-row">
      <span class="gantt-name">Verificación automática de tipos en el código</span>
      <span class="gantt-track"><span class="gantt-bar gantt-bar--planned" style="left:91.503%;width:7.843%" tabindex="0"><span class="gantt-tip">Verificación automática de tipos en el código<b>19 oct → 30 oct</b></span></span></span>
      <span class="gantt-dates">19 oct → 30 oct</span>
    </div>
  </div>
</div>
</div>


:::caution[Las fechas todavía tienen que revisarse]
**Las fechas de entrega de esta línea de tiempo son estimaciones y no están confirmadas.**

Buena parte de las tareas del tablero no tiene una fecha de entrega cargada. Para poder mostrarlas
sobre un eje de tiempo, esas fechas se estimaron según el orden de dependencias entre trabajos y el
ritmo de entrega de los últimos meses.

Todavía tienen que revisarse y acordarse con el equipo, y **es muy probable que cambien**. Tomá
esta vista como un ordenamiento de prioridades y secuencia, no como un compromiso de fechas.

Las barras del bloque **Entregado** sí corresponden a fechas reales de cierre.
:::

## Cómo leer esta vista

- Cada barra es un bloque de trabajo, no una tarea suelta: agrupa las tareas del tablero que
  comparten un mismo objetivo.
- La línea vertical marca **hoy**.
- El orden dentro de **Próximo** no es arbitrario. Hay trabajos que dependen de otros: el
  reordenamiento de pantallas no puede empezar antes de que cierre la unificación de la
  comunicación con el servidor, y la consolidación de módulos depende de ese reordenamiento.
- Los bloques largos del último tramo —reordenamiento de pantallas, consolidación de módulos y capa
  intermedia de datos— son los de mayor esfuerzo del plan. Su duración estimada refleja eso.

---
title: Lo que se entregó
description: El trabajo terminado, ordenado por módulo de la aplicación.
---

Todo lo que figura en esta página está **publicado y disponible** para los equipos.

## Medición de Pozos

Módulo **nuevo y completo**, construido íntegramente en este período. Antes no existía.

Permite registrar una medición de pozo desde el celular, en campo, siguiendo el tipo de medición
que corresponda:

- **Fluido estático** y **Fluido dinámico**, cada uno con sus propios campos.
- **Prueba de Pozo**, con el conjunto de datos que requiere ese ensayo.
- **Parámetros de pozo**, que cambian según el método de extracción del pozo. La aplicación
  muestra solo los campos que aplican, en lugar de pedir todo siempre.
- **Carta Dina Gráfica** para pozos de bombeo mecánico.

Incluye además:

- **Presión de reservorio** y presión estática (esta última, opcional).
- **Adjuntar archivos** como respaldo de la medición.
- **Fecha y hora separadas**, para registrar con precisión el momento real de la toma.
- **Historial de mediciones**, para consultar lo cargado anteriormente.

El acceso al módulo está **controlado por permisos**: solo lo ve quien tiene el rol habilitado.

## Reporte Diario

Es el flujo más usado de la aplicación. Recibió trabajo continuo durante todo el período.

**Funcionalidad nueva:**

- Filtros en los desplegables de los flujos de Fluido Estático, Fluido Dinámico y Prueba de Pozo.
  Antes había que buscar en listas largas; ahora se filtra.
- Campo de **tasa estimada de inyección de diluente total** en el formulario de prueba de pozo.
- **Campos obligatorios para pozos B.C.P**: velocidad de bomba, torque de varillas e intensidad de
  corriente. El formulario ya no permite avanzar sin esos datos.
- Opción **Diluente** en el tipo de fluido del reporte de vacuum.
- **Eliminar un reporte** desde su propio detalle.

**Correcciones sobre situaciones reportadas por los usuarios:**

- Inconsistencias entre lo que mostraba la versión web y la versión móvil, tanto en datos como en
  categorías de pozo.
- Pérdida de datos al salir de un reporte a medio cargar.
- Navegación "volver atrás" que no respetaba el recorrido real.
- Campos que se mostraban en inglés y ahora están en español.
- Desplegables que aparecían vacíos.

## Historial de Reportes

- Se replicaron los **filtros** del resto de la aplicación.
- Se corrigió la aparición del usuario **"Desconocido"**: ahora se identifica quién cargó cada
  reporte.
- Se corrigieron nombres de campos y el tipo de actividad mostrado.
- Se corrigió la navegación al volver desde un reporte.

## Notificaciones

Módulo **nuevo y completo**. Antes la aplicación no tenía canal de avisos.

- Listado de notificaciones dentro de la aplicación.
- **Contador de no leídas**, visible sin entrar al listado.
- **Actualización automática** al recibir una notificación nueva.
- Apertura de enlaces incluidos en el aviso.

Se trabajó especialmente en que **ninguna notificación se pierda**: si el aviso llega sin señal, o
la aplicación se cierra en el medio, el estado de leído se recupera y se sincroniza al reconectar.
Ese comportamiento se revisó a fondo y se cubrió con pruebas automáticas.

## Órdenes de Servicio

Es el módulo con **impacto económico más directo**, porque conecta lo ejecutado en campo con el
control de costos.

El registro sigue la cadena real de imputación: **tipo de operación (OPEX/CAPEX) → centro de costos
→ orden de servicio → actividad macro → partida**. Cada selección filtra la siguiente, de modo que
no se puede imputar contra una combinación que no existe.

Sobre la partida elegida, el usuario ve el **valor de unidad restante** y carga las **unidades
ejecutadas**, junto con el tipo de recurso involucrado (equipo, mano de obra, servicios, materiales
o consumibles), comentarios y **respaldo fotográfico**.

Dos características que importan en campo:

- **Funciona sin conexión.** Si no hay señal, el reporte se guarda y se envía solo al reconectar.
- **Permite corregir un reporte ya enviado**, dejando registro de que fue editado.

## Control de Maquinaria

- Listado y **detalle** de cada máquina.
- **Cambio de estado** con registro del evento, de modo que quede la traza de cuándo cambió y quién
  lo cambió.
- **Carga de combustible con respaldo fotográfico**.
- Registro de **llegada de combustible**.
- Corrección del estado que se mostraba sin color en el listado de control.
- Corrección de errores al registrar movimientos.

## Acarreo de Vacuum

- Corrección de la **edición** de reportes de vacuum, que fallaba.
- Orden correcto de **origen y destino**, y de las cédulas de los choferes.
- Orden de los **tanques de almacenamiento**.
- Corrección de los números de estado del flujo.
- Corrección de la **descarga** de reportes.
- **Panel de control de Vacuum** nuevo.

## Reportes de Laboratorio

- Mejoras en los **estados del laboratorio** y en el total de pendientes que se muestra en el
  inicio.
- Corrección del listado de pendientes que no permitía abrir el formulario para tomar la muestra.
- Mejoras generales sobre los reportes del módulo.

## Otros Reportes

Siete formularios especializados disponibles: Recuperación Facturada y Gastos, Costo de
Levantamiento, Precio de Referencia de Mercado, Inspección Propia, Auditoría de Terceros, Trasiego
Buque a Buque y Comentarios.

Se corrigió además que estos formularios no registraban qué usuario los enviaba.

## Permisos y roles

Se construyó el sistema que **controla qué ve y qué puede hacer cada rol**, con permisos por módulo
y por acción (consultar, crear, editar, eliminar).

La configuración se administra de forma centralizada y la aplicación la toma al iniciar, sin
necesidad de publicar una versión nueva para cambiar quién accede a qué.

## Plataforma y administración

- **Panel de administración** ampliado: puntos de medición y macollas, maquinaria y combustible,
  sistemas de tratamiento, búsqueda de pozos y tanques, y cargas masivas de datos.
- **Migración de usuarios y roles** a la estructura multi-empresa.
- Reemplazo de los tableros anteriores por **tableros de desarrollo propio**, incluidos los de
  producción de pozos y los de cada operadora.
- Corrección de la **firma del instalador de Android**, que impedía instalar la aplicación en
  algunos dispositivos.
- **Actualización de módulos sin reinstalar la aplicación**: cuando se publica una mejora, los
  equipos la reciben sin pasar por la tienda de aplicaciones.

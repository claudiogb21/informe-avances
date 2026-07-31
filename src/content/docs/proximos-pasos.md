---
title: Próximos pasos
description: Hacia dónde sigue el trabajo y por qué en ese orden.
---

## El orden no es negociable

El plan de ordenamiento técnico sigue una regla explícita:

> **Primero las redes de seguridad. Después los cambios de fondo. Al final los movimientos
> estructurales.**

La razón es simple. Reordenar el código sin tener pruebas automáticas que verifiquen que nada se
rompió es apostar. Por eso la red de pruebas se construyó **antes** de tocar nada, y no después.

Las tres etapas completas —controles de calidad, red de pruebas y publicación automática— son
justamente las que habilitan que las siguientes se puedan encarar sin riesgo.

## Lo que sigue

### 1. Terminar la unificación de la comunicación con el servidor

Es el trabajo en curso y el que destraba todo lo demás. Al cerrarlo queda disponible, además, la
capacidad de **monitorear el comportamiento real de la aplicación en campo**.

### 2. Corregir los 5 errores detectados por las pruebas

Errores que ya existían y que la red de pruebas dejó a la vista. Están identificados y priorizados.
Ninguno se manifestó todavía frente a un usuario; el objetivo es corregirlos antes de que eso pase.

### 3. Reordenar las pantallas más complejas

Hay pantallas que concentraron demasiada responsabilidad con el tiempo. Funcionan, pero cada cambio
sobre ellas es más lento y más riesgoso de lo que debería.

Este trabajo **no cambia nada de lo que ve el usuario**. Cambia el tiempo y el riesgo de todo lo que
venga después.

### 4. Consolidar módulos duplicados

Hoy hay módulos que resuelven cosas parecidas por separado. Unificarlos reduce el mantenimiento y
evita que una mejora aplicada en uno se olvide en el otro.

### 5. Capa intermedia de datos

Una capa entre la aplicación y los datos, que ordene y prepare la información antes de que llegue
al dispositivo. Permite que la aplicación crezca sin que cada pantalla nueva agregue peso al
teléfono del usuario.

## Trabajo de producto pendiente

Además del plan técnico, hay funcionalidad de producto en cola:

| Pendiente | Estado |
|---|---|
| Condición para la descarga de reportes | Por asignar |
| Información adicional en las tarjetas del listado de descargas pendientes | Por asignar |
| Paginación en el panel de administración | Pendiente |
| Nueva vista de reportes en el panel de administración | Pendiente |
| Pruebas de extremo a extremo sobre los flujos de Medición de Pozos | Planificada |
| Revisión de seguridad de los enlaces incluidos en notificaciones | Planificada |
| Documentación técnica completa de la plataforma | Planificada |

## Un punto de decisión

Durante el período, una de las etapas del plan **cambió de enfoque**: la publicación de módulos iba
a apoyarse en un servicio externo y pasó a resolverse con infraestructura propia.

El cambio simplificó el trabajo y eliminó una dependencia externa. Pero dejó abierta una decisión:
un requisito de seguridad que se justificaba **únicamente** por el enfoque anterior quedó sin
motivo.

Está registrado explícitamente como **pendiente de replanteo**, no como pendiente de ejecución. Es
decir: hay que volver a evaluar si sigue teniendo sentido, en lugar de hacerlo por inercia.

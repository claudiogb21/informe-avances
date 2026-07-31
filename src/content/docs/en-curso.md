---
title: Trabajo en curso
description: Lo que está empezado y todavía no llegó a los usuarios.
---

Esta página lista el trabajo **empezado y no terminado**. Nada de lo que figura acá está
todavía disponible para los equipos.

## Unificación de la comunicación con el servidor

**El trabajo más grande en curso.**

Hasta ahora, cada módulo de la aplicación resolvía por su cuenta cómo hablar con el servidor. Eso
significaba la misma lógica repetida en muchos lugares: una corrección había que aplicarla varias
veces, y era fácil que quedara alguna sin aplicar.

Se está unificando todo eso en un único punto. Ya se consolidaron nueve lugares distintos donde se
resolvía la dirección del servidor, y se migró el módulo de notificaciones al nuevo esquema.

**Por qué importa:** además de reducir el mantenimiento, este cambio deja preparado el terreno para
**monitorear el comportamiento real de la aplicación** — cuánto tarda cada consulta, dónde falla,
en qué condiciones de red. Hoy esa información no existe.

## Pruebas automatizadas de extremo a extremo

Un segundo tipo de prueba, que no verifica piezas sueltas sino **el recorrido completo del usuario**
dentro de la aplicación, tal como lo haría una persona.

Está en etapa inicial: se prepararon los componentes compartidos para que puedan ser identificados
por la herramienta de pruebas.

## Enlaces directos en notificaciones

Que tocar una notificación lleve directamente a la pantalla correspondiente, en lugar de abrir la
aplicación en el inicio.

Trabajo iniciado, actualmente detenido.

## Diferenciación visual del ambiente de pruebas

Que la versión de pruebas se distinga a simple vista de la versión productiva — ícono y nombre
propios — para evitar que alguien cargue datos reales en el ambiente equivocado.

## Sincronización al iniciar sesión

Ajuste sobre el comportamiento de la sincronización inicial de datos. Se identificó el origen del
problema y la corrección está pendiente de aplicación.

## Campo de rol al iniciar sesión

Cambio en la información que la aplicación envía al iniciar sesión. Trabajo iniciado hace varias
semanas y actualmente detenido.

## Ajustes en el flujo de carga y descarga de Vacuum

Revisión en curso sobre el flujo de acarreo.

## Infraestructura

Queda un paso pendiente en la configuración de publicación a producción, ya identificado.

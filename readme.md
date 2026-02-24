# 🚇 Laboratorio: Sistema Básico de Venta de Tickets del Metro


## 📌 Descripción

Desarrollarás un sistema básico en **JavaScript** que simule la venta de tickets del metro.

El sistema deberás:
- Crear un array con 6 clientes de diferentes edades
- Recorrer el array usando un bucle `for`
- Calcular el costo con y sin descuento para cada cliente
- Mostrar el reporte en consola

Este laboratorio evaluará tu comprensión de:
- ✅ Variables y constantes
- ✅ Arrays de objetos
- ✅ Estructuras de control (`if/else`)
- ✅ Bucles (`for`)
- ✅ Operaciones aritméticas básicas

---

## 🚀 Inicio Rápido

### 1️⃣ Instalar dependencias

Antes de comenzar, instala las dependencias del proyecto:

```bash
npm install
```

### 2️⃣ Ejecutar las pruebas

Para verificar tu código en cualquier momento:

```bash
npm test
```

Las pruebas te dirán qué falta implementar y qué ya está correcto. **Ejecuta este comando frecuentemente mientras trabajas.**

---

## 🎯 Objetivos de aprendizaje

Al finalizar este laboratorio deberás ser capaz de:
- Crear y manipular arrays de objetos
- Recorrer arrays usando bucles `for`
- Aplicar condicionales `if/else` basados en datos
- Realizar cálculos con operadores aritméticos
- Mostrar resultados formateados en consola

---

## 🛠 Requisitos técnicos

- El programa debe ejecutarse en consola (Node.js).
- No se debe usar DOM.
- No se permite usar librerías externas.
- El código debe estar comentado.
- Usar sintaxis básica de JavaScript (arrays, for, if/else, operadores).

---

# 📋 Reglas del Sistema

1. El costo base del ticket es **$0.50**.
2. Si el pasajero es:
   - 👶 Menor de 18 años → 50% de descuento
   - 👴 Mayor o igual a 65 años → 30% de descuento
   - 👨‍💼 Entre 18 y 64 años → paga tarifa normal
3. Debes crear exactamente 6 clientes con diferentes edades que cubran las 3 categorías.

---

# 🧩 Requerimientos del Laboratorio

## 🔹 Parte 1 -- Crear el Array de Clientes

Debes crear un array llamado `clientes` con 6 objetos. Cada objeto debe tener:
- `nombre` (string): Nombre del cliente
- `edad` (number): Edad del cliente
- `tickets` (number): Cantidad de tickets que compra

```js
const clientes = [
    { nombre: "Ana García", edad: 15, tickets: 2 },
    { nombre: "Pedro López", edad: 70, tickets: 3 },
    // ... 4 clientes más
];
```

**Requisitos:**
- Al menos 2 clientes menores de 18 años
- Al menos 2 clientes mayores o iguales a 65 años
- Al menos 2 clientes adultos (18-64 años)

---

## 🔹 Parte 2 -- Recorrer el Array con un Bucle

Usa un bucle `for` para recorrer todos los clientes:

```js
for (let i = 0; i < clientes.length; i++) {
    // Procesar cada cliente
}
```

---

## 🔹 Parte 3 -- Calcular Precios

Dentro del bucle, para cada cliente debes:

1. **Obtener los datos:**
```js
let cliente = clientes[i];
let nombre = cliente.nombre;
let edad = cliente.edad;
let cantidadTickets = cliente.tickets;
```

2. **Calcular precio sin descuento:**
```js
let precioSinDescuento = PRECIO_BASE * cantidadTickets;
```

3. **Determinar descuento según edad:**
```js
let descuento = 0;
if (edad < 18) {
    descuento = 0.50;  // 50%
} else if (edad >= 65) {
    descuento = 0.30;  // 30%
}
```

4. **Calcular precio con descuento:**
```js
let precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);
```

---

## 🔹 Parte 4 -- Mostrar el Reporte

Para cada cliente, muestra en consola:

```js
console.log("Cliente: " + nombre);
console.log("Edad: " + edad + " años");
console.log("Tickets: " + cantidadTickets);
console.log("Precio sin descuento: $" + precioSinDescuento.toFixed(2));
console.log("Descuento aplicado: " + (descuento * 100) + "%");
console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));
console.log("----------------------------------------\n");
```

---

# 🧪 Ejemplo de Salida Esperada

```
========================================
  SISTEMA DE TICKETS DEL METRO
========================================

Cliente: Ana García
Edad: 15 años
Tickets: 2
Precio sin descuento: $1.00
Descuento aplicado: 50%
Precio con descuento: $0.50
----------------------------------------

Cliente: Pedro López
Edad: 70 años
Tickets: 3
Precio sin descuento: $1.50
Descuento aplicado: 30%
Precio con descuento: $1.05
----------------------------------------

[... más clientes ...]
```

---

# 📦 Entregable

Debes entregar:
- Archivo `index.js` con el código completo
- Array con 6 clientes de diferentes edades
- Bucle `for` que procese todos los clientes
- Cálculos correctos de precios con y sin descuento
- Reportes mostrados en consola

---

# 🏆 Criterios de Evaluación

| Criterio | Puntaje |
|----------|---------|
| Array y variables correctas | 40 pts |
| Categorías de edad (2 de cada tipo) | 30 pts |
| Bucle for funcionando | 20 pts |
| Calidad y comentarios del código | 10 pts |

**Total: 100 puntos**

---

# 🧪 Pruebas Automáticas

## 🚀 Comandos disponibles

```bash
# Ejecutar pruebas (lo más común)
npm test

# Ejecutar con detalles
npm test -- --verbose

# Modo watch (se ejecutan automáticamente al guardar)
npm run test:watch
```

## 📊 Qué verifican las pruebas

- ✅ Array `clientes` con 6 elementos
- ✅ Cada cliente tiene: nombre, edad, tickets
- ✅ Al menos 2 clientes de cada categoría de edad
- ✅ Uso de bucle `for` para recorrer el array
- ✅ Código comentado
- ✅ Lógica de descuentos correcta

## 💡 Consejos

1. Crea primero el array con los 6 clientes
2. Asegúrate de tener 2 menores, 2 mayores y 2 adultos
3. Implementa el bucle `for` básico
4. Agrega la lógica de cálculo dentro del bucle
5. **Ejecuta `npm test` frecuentemente** para ver tu progreso
6. No olvides exportar `clientes` y `PRECIO_BASE` al final

---

## 🤖 GitHub Actions

Si subes tu código a GitHub, las pruebas se ejecutan automáticamente.

- Ve a la pestaña **"Actions"** en tu repositorio
- ✅ Verde = todas las pruebas pasaron
- ❌ Rojo = hay errores que corregir

---

# 📧 Soporte

Si tienes dudas sobre las pruebas o el laboratorio, consulta con tu profesor.

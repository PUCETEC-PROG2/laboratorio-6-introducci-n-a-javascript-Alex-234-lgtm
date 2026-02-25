// =========================================
// 🚇 SISTEMA DE VENTA DE TICKETS DEL METRO
// =========================================

// Precio base de un ticket
const PRECIO_BASE = 0.50;

// =========================================
// PASO 1: CREAR ARRAY DE CLIENTES
// =========================================

// TODO: Crea un array con 6 objetos de clientes
// Cada objeto debe tener: nombre (string), edad (number), tickets (number)
// Incluye clientes de diferentes edades para cubrir todas las categorías:
// - Al menos 2 menores de 18 años (50% descuento)
// - Al menos 2 mayores de 65 años (30% descuento)  
// - Al menos 2 adultos entre 18-64 años (sin descuento)

const clientes = [
    { nombre: "Pablo Pérez", edad: 15, tickets: 2 },     // Menor
    { nombre: "María López", edad: 70, tickets: 1 },     // Mayor
    // TODO: Agrega 4 clientes más siguiendo esta estructura
    // Asegúrate de incluir: 1 menor más, 1 mayor más, y 2 adultos (18-64 años)
    { nombre:"Jhon Doe", edad: 12, tickets: 1 }, 
    { nombre:"John Lennon", edad: 80, tickets: 1 }, 
    { nombre:"Ana Cano", edad: 50, tickets: 1 }, 
    { nombre:"Alejandro Chiriboga", edad: 24, tickets: 1},
];


// =========================================
// PASO 2: PROCESAR CLIENTES
// =========================================

console.log("========================================");
console.log("  SISTEMA DE TICKETS DEL METRO");
console.log("========================================\n");

// TODO: Crea un bucle for que recorra el array 'clientes'
for (let i = 0; i < clientes.length; i++) {
    
    // TODO: Paso 1 - Obtén los datos del cliente actual
    let cliente = clientes[i];
    let nombre = cliente.nombre;
    let edad = cliente.edad;
    let cantidadTickets = cliente.tickets;
    
    // TODO: Paso 2 - Calcula el precio sin descuento
    // Multiplica PRECIO_BASE por cantidadTickets
    let precioSinDescuento = PRECIO_BASE * cantidadTickets; // Reemplaza 0 con el cálculo correcto
    
    // TODO: Paso 3 - Calcula el descuento según la edad
    let descuento = 0;
    // Si edad < 18, descuento = 0.50 (50%)
    if (edad < 18) {
        descuento = 0.50;
    }
    // Si edad >= 65, descuento = 0.30 (30%)
    else if (edad >= 65) {
        descuento = 0.30;
    }
    // Si no, descuento = 0 (sin descuento)
    
    // TODO: Paso 4 - Calcula el precio con descuento
    // Resta al precioSinDescuento el monto del descuento
    let montoDescuento = precioSinDescuento * descuento;
    let precioConDescuento = precioSinDescuento - montoDescuento;
    
    // TODO: Paso 5 - Muestra el reporte del cliente
    console.log("Cliente: " + nombre);
    console.log("Edad: " + edad + " años");
    console.log("Tickets: " + cantidadTickets);
    console.log("Precio sin descuento: $" + precioSinDescuento.toFixed(2));
    console.log("Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));
    console.log("----------------------------------------\n");
}


// =========================================
// EXPORTAR (para las pruebas)
// =========================================
module.exports = { clientes, PRECIO_BASE };


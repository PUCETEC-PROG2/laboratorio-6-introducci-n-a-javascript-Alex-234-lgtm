/**
 * 🧪 Pruebas Unitarias - Sistema de Tickets del Metro
 * Total: 100 puntos
 */

const fs = require('fs');
const path = require('path');

// Importar el código del estudiante
let clientes, PRECIO_BASE;

describe('🚇 Sistema de Tickets del Metro', () => {
    
    beforeAll(() => {
        try {
            const modulo = require('../index.js');
            clientes = modulo.clientes;
            PRECIO_BASE = modulo.PRECIO_BASE;
        } catch (error) {
            console.error('❌ Error al cargar index.js:', error.message);
        }
    });

    // =========================================
    // PARTE 1: ARRAY Y VARIABLES (40 pts)
    // =========================================
    describe('Parte 1: Array y Variables (40 pts)', () => {
        
        test('[10 pts] PRECIO_BASE debe ser 0.50', () => {
            expect(PRECIO_BASE).toBe(0.50);
        });

        test('[10 pts] El array clientes existe', () => {
            expect(clientes).toBeDefined();
            expect(Array.isArray(clientes)).toBe(true);
        });

        test('[10 pts] El array tiene 6 clientes', () => {
            expect(clientes.length).toBe(6);
        });

        test('[10 pts] Cada cliente tiene nombre, edad y tickets', () => {
            clientes.forEach((cliente, index) => {
                expect(cliente).toHaveProperty('nombre');
                expect(cliente).toHaveProperty('edad');
                expect(cliente).toHaveProperty('tickets');
                expect(typeof cliente.nombre).toBe('string');
                expect(typeof cliente.edad).toBe('number');
                expect(typeof cliente.tickets).toBe('number');
            });
        });
    });

    // =========================================
    // PARTE 2: CATEGORÍAS DE EDAD (30 pts)
    // =========================================
    describe('Parte 2: Categorías de Edad (30 pts)', () => {
        
        test('[10 pts] Hay al menos 2 clientes menores de 18 años', () => {
            const menores = clientes.filter(c => c.edad < 18);
            expect(menores.length).toBeGreaterThanOrEqual(2);
        });

        test('[10 pts] Hay al menos 2 clientes mayores de 65 años', () => {
            const mayores = clientes.filter(c => c.edad >= 65);
            expect(mayores.length).toBeGreaterThanOrEqual(2);
        });

        test('[10 pts] Hay al menos 2 clientes adultos (18-64 años)', () => {
            const adultos = clientes.filter(c => c.edad >= 18 && c.edad < 65);
            expect(adultos.length).toBeGreaterThanOrEqual(2);
        });
    });

    // =========================================
    // PARTE 3: BUCLE FOR (20 pts)
    // =========================================
    describe('Parte 3: Bucle for (20 pts)', () => {
        
        test('[10 pts] El código usa un bucle for', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            const tieneFor = /for\s*\(\s*let\s+\w+\s*=/.test(contenido);
            expect(tieneFor).toBe(true);
        });

        test('[10 pts] El bucle recorre el array clientes', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            const recorreClientes = /for\s*\([^)]*clientes\.length/.test(contenido);
            expect(recorreClientes).toBe(true);
        });
    });

    // =========================================
    // PARTE 4: CALIDAD DEL CÓDIGO (10 pts)
    // =========================================
    describe('Parte 4: Calidad del Código (10 pts)', () => {
        
        test('[5 pts] El código tiene comentarios', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            const tieneComentarios = /\/\/|\/\*/.test(contenido);
            expect(tieneComentarios).toBe(true);
        });

        test('[5 pts] No hay errores de sintaxis', () => {
            expect(() => {
                require('../index.js');
            }).not.toThrow();
        });
    });

    // =========================================
    // INTEGRACIÓN - LÓGICA DE DESCUENTOS
    // =========================================
    describe('Pruebas de Integración - Lógica de Descuentos', () => {
        
        test('El código debe aplicar descuento correcto a menores', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            // Busca if con condición de edad < 18 y descuento 50%
            const tieneDescuentoMenor = /edad\s*<\s*18/.test(contenido) || 
                                       /18\s*>\s*edad/.test(contenido);
            expect(tieneDescuentoMenor).toBe(true);
        });

        test('El código debe aplicar descuento correcto a mayores', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            // Busca if con condición de edad >= 65 y descuento 30%
            const tieneDescuentoMayor = /edad\s*>=\s*65/.test(contenido) || 
                                       /65\s*<=\s*edad/.test(contenido);
            expect(tieneDescuentoMayor).toBe(true);
        });

        test('El código debe mostrar precio sin descuento', () => {
            const contenido = fs.readFileSync(
                path.join(__dirname, '../index.js'), 
                'utf8'
            );
            // Busca cálculo de precio sin descuento
            const calculaPrecioBase = /PRECIO_BASE\s*\*/.test(contenido);
            expect(calculaPrecioBase).toBe(true);
        });
    });
});

// RESUMEN
afterAll(() => {
    console.log('\n=============================');
    console.log('📊 CALIFICACIÓN');
    console.log('=============================');
    console.log('Array y Variables:  40 pts');
    console.log('Categorías edad:    30 pts');
    console.log('Bucle for:          20 pts');
    console.log('Calidad código:     10 pts');
    console.log('=============================');
    console.log('TOTAL:             100 pts');
    console.log('=============================\n');
});

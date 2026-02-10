const { calcWeightedGrade, percentile } = require('./grade.js');

// Pruebas para la función calcWeightedGrade
describe('calcWeightedGrade', () => {
    test('calcula correctamente el promedio ponderado con dos evaluaciones', () => {
        const evaluaciones = [
            { score: 75, weight: 0.3 },
            { score: 95, weight: 0.7 }
        ];
        expect(calcWeightedGrade(evaluaciones)).toBe(89.00);
    });

    test('verifica que rechace objetos no iterables como entrada', () => {
        expect(() => calcWeightedGrade({ score: 85, weight: 0.5 })).toThrow(TypeError);
    });

    test('valida tipos de datos en propiedades score y weight', () => {
        expect(() => calcWeightedGrade([{ score: '85', weight: 0.5 }])).toThrow(TypeError);
        expect(() => calcWeightedGrade([{ score: 85, weight: '0.5' }])).toThrow(TypeError);
    });

    test('controla que las calificaciones estén en el rango permitido', () => {
        expect(() => calcWeightedGrade([
            { score: -5, weight: 0.5 },
            { score: 85, weight: 0.5 }
        ])).toThrow(RangeError);

        expect(() => calcWeightedGrade([
            { score: 105, weight: 0.5 },
            { score: 85, weight: 0.5 }
        ])).toThrow(RangeError);
    });

    test('verifica que los pesos estén dentro del intervalo [0,1]', () => {
        expect(() => calcWeightedGrade([
            { score: 85, weight: -0.2 },
            { score: 95, weight: 1.2 }
        ])).toThrow(RangeError);
    });

    test('asegura que la suma total de pesos sea aproximadamente 1', () => {
        expect(() => calcWeightedGrade([
            { score: 70, weight: 0.4 },
            { score: 80, weight: 0.7 }
        ])).toThrow(RangeError);
    });
});

// Pruebas para la función percentile
describe('percentile', () => {
    test('devuelve el valor mínimo cuando se solicita el percentil 0', () => {
        expect(percentile(0, [5, 10, 15])).toBe(5.00);
    });

    test('devuelve el valor máximo cuando se solicita el percentil 100', () => {
        expect(percentile(100, [5, 10, 15])).toBe(15.00);
    });

    test('calcula el percentil 50 (mediana) correctamente', () => {
        expect(percentile(50, [10, 20, 30, 40])).toBe(20.00);
    });

    test('verifica que p sea un valor numérico válido', () => {
        expect(() => percentile('cincuenta', [10, 20, 30])).toThrow(TypeError);
    });

    test('rechaza arrays vacíos y valores no iterables', () => {
        expect(() => percentile(50, [])).toThrow(TypeError);
        expect(() => percentile(50, 'texto')).toThrow(TypeError);
    });

    test('valida que todos los elementos sean numéricos', () => {
        expect(() => percentile(50, [10, '20', 30])).toThrow(TypeError);
    });

    test('controla que el percentil esté en el rango [0,100]', () => {
        expect(() => percentile(-10, [10, 20, 30])).toThrow(RangeError);
        expect(() => percentile(110, [10, 20, 30])).toThrow(RangeError);
    });
});
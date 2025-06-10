// Calculadora.test.js
// Testes unitários para a classe Calculadora
// Seguindo boas práticas de testes e código, com comentários detalhados

import { Calculadora } from '../src/Calculadora';

describe('Calculadora', () => {
    let calc;
    beforeEach(() => {
        // Instancia uma nova Calculadora antes de cada teste
        calc = new Calculadora();
    });

    describe('Método avaliar', () => {
        it('deve avaliar expressões matemáticas simples', () => {
            // Testa soma simples
            expect(calc.avaliar('2+2')).toBe(4);
            // Testa subtração
            expect(calc.avaliar('5-3')).toBe(2);
            // Testa multiplicação
            expect(calc.avaliar('3*4')).toBe(12);
            // Testa divisão
            expect(calc.avaliar('10/2')).toBe(5);
        });

        it('deve avaliar funções trigonométricas em radianos', () => {
            // Testa seno de PI/2
            expect(calc.avaliar('sin(PI/2)')).toBeCloseTo(1);
            // Testa cosseno de 0
            expect(calc.avaliar('cos(0)')).toBeCloseTo(1);
        });

        it('deve avaliar funções trigonométricas em graus', () => {
            // Altera o modo para graus
            calc.setAngleMode('DEG');
            // Testa seno de 90 graus
            expect(calc.avaliar('sin(90)')).toBeCloseTo(1);
        });

        it('deve retornar erro para expressões inválidas', () => {
            // Expressão inválida
            expect(calc.avaliar('2++2')).toMatch(/Erro/);
        });
    });

    describe('Método fatorial', () => {
        it('deve calcular o fatorial corretamente', () => {
            expect(calc.fatorial(5)).toBe(120);
            expect(calc.fatorial(0)).toBe(1);
            expect(calc.fatorial(1)).toBe(1);
        });
        it('deve retornar NaN para números negativos', () => {
            expect(Number.isNaN(calc.fatorial(-3))).toBe(true);
        });
    });

    describe('Método setVar', () => {
        it('deve definir variáveis de uma letra maiúscula', () => {
            calc.setVar('A', 10);
            expect(calc.vars['A']).toBe(10);
        });
        it('não deve definir variáveis inválidas', () => {
            calc.setVar('abc', 5);
            expect(calc.vars['abc']).toBeUndefined();
        });
    });

    describe('Método media', () => {
        it('deve calcular a média de uma lista de números', () => {
            expect(calc.media('1,2,3,4')).toBe(2.5);
        });
    });

    describe('Método mediana', () => {
        it('deve calcular a mediana corretamente', () => {
            expect(calc.mediana('1,2,3')).toBe(2);
            expect(calc.mediana('1,2,3,4')).toBe(2.5);
        });
    });

    describe('Método moda', () => {
        it('deve calcular a moda corretamente', () => {
            expect(calc.moda('1,2,2,3')).toBe(2);
            expect(calc.moda('1,1,2,2')).toEqual([1,2]);
        });
    });

    describe('Método variancia', () => {
        it('deve calcular a variância corretamente', () => {
            expect(calc.variancia('1,2,3')).toBeCloseTo(2/3);
        });
    });

    describe('Método desvioPadrao', () => {
        it('deve calcular o desvio padrão corretamente', () => {
            expect(calc.desvioPadrao('1,2,3')).toBeCloseTo(Math.sqrt(2/3));
        });
    });

    describe('Método main', () => {
        it('deve executar operações válidas', () => {
            expect(calc.main('media', '1,2,3')).toBe(2);
        });
        it('deve retornar erro para operações inválidas', () => {
            expect(calc.main('invalida', '1,2,3')).toMatch(/inválida/);
        });
    });
});

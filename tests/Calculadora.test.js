// Calculadora.test.js
// Arquivo de testes unitários para a classe Calculadora
// Este arquivo utiliza Jest para garantir que os métodos da Calculadora funcionam corretamente.
// Cada teste cobre um aspecto específico da lógica da calculadora, seguindo boas práticas de testes.
// Comentários detalhados são fornecidos para facilitar o entendimento e a manutenção do código.

import { Calculadora } from '../src/Models/Calculadora';

// Descreve o grupo de testes para a classe Calculadora
// Utiliza o describe para agrupar todos os testes relacionados
// O beforeEach garante que cada teste começa com uma nova instância da Calculadora

describe('Calculadora', () => {
    let calc;
    beforeEach(() => {
        // Instancia uma nova Calculadora antes de cada teste
        // Isso garante que os testes sejam independentes e não compartilhem estado
        calc = new Calculadora();
    });
    
    // Exemplo de teste: soma de dois números
    // Este teste serve como modelo para adicionar outros métodos matemáticos
    it('deve somar dois números', () => {
        // Testa a soma de dois números positivos
        expect(calc.soma(2, 3)).toBe(5);
        // Testa a soma de um número negativo e um positivo
        expect(calc.soma(-1, 1)).toBe(0);
    });

    // Adicione outros testes para os métodos da Calculadora conforme necessário
});

// App.test.js
// Testes para o componente App
// Seguindo boas práticas de testes e código, com comentários detalhados

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/Components/App';

describe('App', () => {
    it('deve renderizar o título da calculadora', () => {
        render(<App />);
        // Verifica se o título está presente
        expect(screen.getByText(/Calculadora Científica/i)).toBeInTheDocument();
    });

    it('deve permitir digitar uma expressão e calcular o resultado', () => {
        render(<App />);
        // Digita uma expressão
        fireEvent.change(screen.getByPlaceholderText(/Ex: 2\*A\+sin\(PI\/2\) ou 1,2,3/i), { target: { value: '2+2' } });
        // Clica no botão Calcular
        fireEvent.click(screen.getByText(/Calcular/i));
        // Verifica o resultado
        expect(screen.getByText(/Resultado:/i).textContent).toMatch(/4/);
    });

    it('deve calcular média de uma lista', () => {
        render(<App />);
        // Digita uma lista
        fireEvent.change(screen.getByPlaceholderText(/Ex: 2\*A\+sin\(PI\/2\) ou 1,2,3/i), { target: { value: '1,2,3,4' } });
        // Seleciona operação média
        fireEvent.change(screen.getByDisplayValue('Expressão'), { target: { value: 'media' } });
        // Clica no botão Calcular
        fireEvent.click(screen.getByText(/Calcular/i));
        // Verifica o resultado
        expect(screen.getByText(/Resultado:/i).textContent).toMatch(/2.5/);
    });

    it('deve alternar entre radianos e graus e calcular seno corretamente', () => {
        render(<App />);
        // Digita 90
        fireEvent.change(screen.getByPlaceholderText(/Ex: 2\*A\+sin\(PI\/2\) ou 1,2,3/i), { target: { value: 'sin(90)' } });
        // Seleciona modo graus
        fireEvent.change(screen.getByDisplayValue('Radiano'), { target: { value: 'DEG' } });
        // Clica no botão Calcular
        fireEvent.click(screen.getByText(/Calcular/i));
        // Verifica o resultado
        expect(screen.getByText(/Resultado:/i).textContent).toMatch(/1/);
    });

    it('deve mostrar erro para expressão inválida', () => {
        render(<App />);
        fireEvent.change(screen.getByPlaceholderText(/Ex: 2\*A\+sin\(PI\/2\) ou 1,2,3/i), { target: { value: '2++2' } });
        fireEvent.click(screen.getByText(/Calcular/i));
        expect(screen.getByText(/Resultado:/i).textContent).toMatch(/Erro/);
    });
});

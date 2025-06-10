// App.jsx
import React, { useState } from 'react';
import { Calculadora } from './Calculadora';

const calc = new Calculadora();

export default function App() {
    const [input, setInput] = useState('');
    const [resultado, setResultado] = useState('');
    const [modoAngulo, setModoAngulo] = useState('RAD');
    const [operacao, setOperacao] = useState('avaliar');

    const handleCalcular = () => {
        calc.setAngleMode(modoAngulo);
        const r = operacao === 'avaliar'
            ? calc.avaliar(input)
            : calc.main(operacao, input);
        setResultado(String(r));
    };

    return (
        <div className="max-w-md mx-auto p-4 rounded-xl bg-gray-900 text-white shadow-lg mt-10">
            <h1 className="text-2xl font-bold mb-4">Calculadora Científica</h1>

            <label className="block mb-2">Expressão ou Lista:</label>
            <input
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ex: 2*A+sin(PI/2) ou 1,2,3"
            />

            <div className="flex justify-between mt-4">
                <select
                    value={operacao}
                    onChange={e => setOperacao(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-600 rounded"
                >
                    <option value="avaliar">Expressão</option>
                    <option value="media">Média</option>
                    <option value="mediana">Mediana</option>
                    <option value="moda">Moda</option>
                    <option value="variancia">Variância</option>
                    <option value="desvioPadrao">Desvio Padrão</option>
                </select>

                <select
                    value={modoAngulo}
                    onChange={e => setModoAngulo(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-600 rounded"
                >
                    <option value="RAD">Radiano</option>
                    <option value="DEG">Graus</option>
                </select>

                <button
                    onClick={handleCalcular}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                    Calcular
                </button>
            </div>

            {resultado && (
                <div className="mt-4 p-2 bg-gray-800 border border-gray-600 rounded">
                    <strong>Resultado:</strong> {resultado}
                </div>
            )}
        </div>
    );
}


// App.jsx
// Componente principal da calculadora científica
// Comentários detalhados linha a linha para facilitar o entendimento

import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar estados

import { Calculadora } from './Models/Calculadora'; // Importa a classe Calculadora com as operações matemáticas
import { Aritimetica } from './Models/Aritimetica';

//import { Científicas } from './Models/Científicas';
//import {Calculo_numerico} from './Models/Calculo_numerico'; // Importa a classe para cálculos numéricos
//import {Conversores_de_moeda} from './Models/Conversores_de_moeda'; // Importa a classe para conversão de moedas
//import {Equacoes_e_Sistemas} from './Models/Equacoes_e_Sistemas'; // Importa a classe para resolver equações e sistemas
//import {Estatisticadescritiva} from './Models/Estatisticadescritiva'; // Importa a classe para estatística descritiva
//import {Fracoes} from './Models/Fracoes'; // Importa a classe para operações com frações
//import {Geometria} from './Models/Geometria'; // Importa a classe
//import {Graficos} from './Models/Graficos'; // Importa a classe para gráficos


import logo from './assets/logo.png';
<img src={logo} alt="Logo do MathCore" />



const arit = new Aritimetica(); // Cria uma instância da Aritmetica para ser usada no componente
//const cient = new Científicas(); // Cria uma instância da Científicas para
const calc = new Calculadora(); // Cria uma instância da Calculadora para ser usada no componente

export default function App() {
    // Estado para armazenar o valor digitado pelo usuário (expressão ou lista)
    const [input, setInput] = useState('');
    // Estado para armazenar o resultado do cálculo
    const [resultado, setResultado] = useState('');
    // Estado para armazenar o modo de ângulo selecionado (RAD ou DEG)
    const [modoAngulo, setModoAngulo] = useState('RAD');
    // Estado para armazenar a operação selecionada (avaliar, media, mediana, etc)
    const [operacao, setOperacao] = useState('avaliar');
    // Estado para armazenar o histórico das contas
    const [historico, setHistorico] = useState([]);

    // Função chamada ao clicar no botão Calcular
    const handleCalcular = () => {
        calc.setAngleMode(modoAngulo); // Define o modo de ângulo na calculadora
        // Se a operação for 'avaliar', avalia a expressão diretamente
        // Caso contrário, chama o método main para operações estatísticas
        const r = operacao === 'avaliar'
            ? calc.avaliar(input)
            : calc.main(operacao, input);
        setResultado(String(r)); // Atualiza o estado do resultado para exibir na tela
        // Adiciona a operação ao histórico
        setHistorico(prev => [
            { expressao: input, operacao, modoAngulo, resultado: String(r) },
            ...prev
        ]);
    };

    // Renderiza a interface da calculadora
    return (
        <div
            style={{
                maxWidth: 400, // Largura máxima do container
                margin: '40px auto', // Centraliza vertical e horizontalmente
                padding: 24, // Espaçamento interno
                borderRadius: 12, // Bordas arredondadas
                background: '#222', // Cor de fundo escura
                color: '#fff', // Cor do texto
                boxShadow: '0 2px 12px #0006' // Sombra para destaque
            }}
        >
            {/* Título da calculadora */}
            <h1 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>
                Calculadora Científica
            </h1>

            {/* Histórico das contas anteriores */}
            {historico.length > 0 && (
                <div style={{ marginBottom: 16, background: '#181818', borderRadius: 6, padding: 8, border: '1px solid #333', maxHeight: 120, overflowY: 'auto' }}>
                    <strong>Histórico:</strong>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {historico.map((item, idx) => (
                            <li key={idx} style={{ fontSize: 13, borderBottom: '1px solid #333', padding: '2px 0' }}>
                                <span style={{ color: '#90caf9' }}>{item.expressao}</span>
                                {' '}<span style={{ color: '#aaa' }}>[{item.operacao}, {item.modoAngulo}]</span>
                                {' '}= <span style={{ color: '#fff' }}>{item.resultado}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Campo de entrada para expressão ou lista de números */}
            <label style={{ display: 'block', marginBottom: 8 }}>
                Expressão ou Lista:
            </label>
            <input
                style={{
                    width: '100%', // Ocupa toda a largura
                    padding: 8, // Espaçamento interno
                    borderRadius: 6, // Bordas arredondadas
                    border: '1px solid #444', // Borda discreta
                    background: '#333', // Fundo escuro
                    color: '#fff', // Texto branco
                    marginBottom: 16 // Espaço abaixo
                }}
                type="text" // Tipo texto
                value={input} // Valor do input controlado pelo estado
                onChange={e => setInput(e.target.value)} // Atualiza o estado ao digitar
                placeholder="Ex: 2*A+sin(PI/2) ou 1,2,3" // Dica para o usuário
            />

            {/* Linha com seleção de operação e modo de ângulo */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                {/* Seleção da operação matemática ou estatística */}
                <select
                    value={operacao} // Valor selecionado
                    onChange={e => setOperacao(e.target.value)} // Atualiza o estado ao mudar
                    style={{
                        flex: 1,
                        padding: 8,
                        borderRadius: 6,
                        background: '#333',
                        color: '#fff',
                        border: '1px solid #444'
                    }}
      >   
                    {/*  */}
                    
                    <option value="soma">Soma</option>
                    <option value="subtracao">Subtração</option>
                    <option value="multiplicacao">Multiplicação</option>
                    <option value="divisao">Divisão</option>
                    <option value="potencia">Potência</option>
                    <option value="fatorial">Fatorial</option>
                    <option value="modulo">Módulo</option>
 {/*  */}

                    <option value="raizQuadrada">Raiz Quadrada</option>
                    <option value="seno">Seno</option>
                    <option value="cosseno">Cosseno</option>
                    <option value="tangente">Tangente</option>
                    <option value="cotangente">Cotangente</option>
                    <option value="secante">Secante</option>
                    <option value="cossecante">Cossecante</option>
                    <option value="logaritmo">Logaritmo</option>

                    
                    <option value="avaliar">Expressão</option>
                    <option value="media">Média</option>
                    <option value="mediana">Mediana</option>
                    <option value="moda">Moda</option>
                    <option value="variancia">Variância</option>
                    <option value="desvioPadrao">Desvio Padrão</option>
                </select>
                {/* Seleção do modo de ângulo (radiano ou graus) */}
                <select
                    value={modoAngulo}
                    onChange={e => setModoAngulo(e.target.value)}
                    style={{
                        flex: 1,
                        padding: 8,
                        borderRadius: 6,
                        background: '#333',
                        color: '#fff',
                        border: '1px solid #444'
                    }}
                >
                    <option value="RAD">Radiano</option>
                    <option value="DEG">Graus</option>
                </select>
            </div>

            {/* Botão para executar o cálculo */}
            <button
                onClick={handleCalcular} // Chama a função ao clicar
                style={{
                    width: '100%',
                    padding: 10,
                    borderRadius: 6,
                    background: '#1976d2',
                    color: '#fff',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: 12
                }}
            >
                Calcular
            </button>

            {/* Exibe o resultado se houver */}
            {resultado && (
                <div
                    style={{
                        marginTop: 16,
                        padding: 12,
                        background: '#333',
                        borderRadius: 6,
                        border: '1px solid #444'
                    }}
                >
                    <strong>Resultado:</strong> {resultado}
                </div>
            )}
        </div>
    );
}

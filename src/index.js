// index.js
// Ponto de entrada da aplicação React
// Seguindo boas práticas e com comentários detalhados

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa estilos globais
import App from './App'; // Importa o componente principal

//export { Aritimetica } from './Models/Aritimetica';
//export { Calculadora } from './Models/Calculadora';
//export { Calculo_numerico } from './Models/Calculo_numerico';
//export { Científicas } from './Models/Científicas';
//export { Conversores_de_moeda } from './Models/Conversores_de_moeda';
//export { Equacoes_e_Sistemas } from './Models/Equacoes_e_Sistemas';
////export { Estatisticadescritiva } from './Models/Estatisticadescritiva';
//export { Fracoes } from './Models/Fracoes';
//export { Graficos } from './Models/Graficos';



// Cria a raiz do React na div 'root' do HTML


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Comentário: O React.StrictMode ajuda a identificar problemas de ciclo de vida, avisos e práticas não recomendadas durante o desenvolvimento.

// index.js
// Ponto de entrada da aplicação React
// Seguindo boas práticas e com comentários detalhados

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa estilos globais
import App from './App'; // Importa o componente principal

// Cria a raiz do React na div 'root' do HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Comentário: O React.StrictMode ajuda a identificar problemas de ciclo de vida, avisos e práticas não recomendadas durante o desenvolvimento.

# Calculadora JS

Este projeto consiste em uma calculadora desenvolvida em JavaScript, capaz de realizar operações estatísticas e matemáticas, como média, mediana, moda, variância, desvio padrão e avaliação de expressões matemáticas com variáveis.

## Funcionalidades
- **Média**: Calcula a média aritmética de uma lista de números.
- **Mediana**: Determina o valor central de um conjunto de números.
- **Moda**: Identifica o valor mais frequente em uma lista.
- **Variância**: Calcula a variância de um conjunto de dados.
- **Desvio Padrão**: Calcula o desvio padrão dos valores informados.
- **Avaliação de Expressões**: Permite avaliar expressões matemáticas, inclusive com o uso de variáveis definidas pelo usuário.

## Como utilizar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador para utilizar a interface gráfica, ou utilize o arquivo `main.js` para executar exemplos diretamente pelo Node.js.
3. Os exemplos de uso das operações estão presentes no arquivo `main.js`.

## Estrutura dos arquivos
- `Calculadora.js`: Implementação da classe principal com os métodos de cálculo.
- `main.js`: Exemplos de uso das operações disponíveis.
- `index.html`: Interface web para interação com a calculadora.
- `styles.css`: Estilos para a interface web.

## Exemplo de uso no código
```javascript
import { Calculadora } from './Calculadora.js';
const calc = new Calculadora();
console.log('Média:', calc.main('media', '1,2,3,4,5'));
console.log('Mediana:', calc.main('mediana', [1,2,3,4,5]));
console.log('Moda:', calc.main('moda', '1,2,2,3'));
console.log('Variância:', calc.main('variancia', [1,2,3]));
console.log('Desvio Padrão:', calc.main('desvioPadrao', '1,2,3'));
calc.setVar('A', 5);
console.log('Expressão com variável:', calc.main('avaliar', '2*A+sin(PI/2)'));
```

## Requisitos
- Navegador moderno para uso da interface web
- Node.js (opcional, para execução via terminal)

## Licença
Este projeto é de uso acadêmico e livre para estudos.

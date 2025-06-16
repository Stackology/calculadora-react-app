// Calculadora.js

// Classe principal responsável por operações matemáticas e estatísticas
class Calculadora {
    constructor() {
        // Objeto para armazenar variáveis definidas pelo usuário (ex: A=2)
        this.vars = {};
        // Define o modo de ângulo padrão como radiano ('RAD'). Pode ser 'DEG' para graus.
        this.angleMode = 'RAD';
    }

    // Soma de uma arrays de números ou dois valores
    soma(...valores) {
        // Se for uma string, converte para array de números
        if (typeof valores[0] === 'string') {
            valores = valores[0].split(',').map(Number);
        }
        // Retorna a soma de todos os valores
        return valores.reduce((acc, val) => acc + val, 0);
    }



    // Subtrai o segundo valor do primeiro
    subtracao(...valores) {
        // Se for uma string, converte para array de números
        if (typeof valores[0] === 'string') {
            valores = valores[0].split(',').map(Number);
        }
        // Retorna a diferença entre o primeiro valor e a soma dos demais
        return valores.reduce((acc, val) => acc - val);
    }

    // Multiplica dois valores
    multiplicacao(...valores) {
        // Se for uma string, converte para array de números
        if (typeof valores[0] === 'string') {
            valores = valores[0].split(',').map(Number);
        }
        // Retorna o produto de todos os valores
        return valores.reduce((acc, val) => acc * val, 1);
    }

    // Divide o primeiro valor pelo segundo
    divisao(...valores) {
        // Se for uma string, converte para array de números
        if (typeof valores[0] === 'string') {
            valores = valores[0].split(',').map(Number);
        }
        // Se o divisor for zero, retorna mensagem de erro
        if (valores.includes(0)) return 'Erro: divisão por zero';
        // Retorna o resultado da divisão do primeiro valor pelo produto dos demais
        return valores.reduce((acc, val) => acc / val);
    }

    // Calcula a potência de um número
    potencia(base, expoente) {
        // Usa Math.pow para calcular base elevado ao expoente
        return Math.pow(base, expoente);
    }

    // Calcula a raiz quadrada de um valor
    raizQuadrada(valor) {
        // Se valor for negativo, retorna erro
        if (valor < 0) return 'Erro: raiz de número negativo';
        // Caso contrário, retorna a raiz quadrada
        return Math.sqrt(valor);
    }

    // Calcula o seno de um ângulo, considerando o modo de ângulo
    seno(angulo) {
        // Se o modo for graus, converte para radianos antes de calcular
        return this.angleMode === 'DEG'
            ? Math.sin(angulo * Math.PI / 180)
            : Math.sin(angulo);
    }

    // Calcula o cosseno de um ângulo, considerando o modo de ângulo
    cosseno(angulo) {
        // Se o modo for graus, converte para radianos antes de calcular
        return this.angleMode === 'DEG'
            ? Math.cos(angulo * Math.PI / 180)
            : Math.cos(angulo);
    }

    // Calcula a tangente de um ângulo, considerando o modo de ângulo
    tangente(angulo) {
        // Se o modo for graus, converte para radianos antes de calcular
        return this.angleMode === 'DEG'
            ? Math.tan(angulo * Math.PI / 180)
            : Math.tan(angulo);
    }

    // Calcula o logaritmo de um valor em uma base específica (padrão base 10)
    logaritmo(valor, base = 10) {
        // Valida se valor e base são positivos e base diferente de 1
        if (valor <= 0 || base <= 0 || base === 1) return 'Erro: logaritmo inválido';
        // Retorna o logaritmo usando mudança de base
        return Math.log(valor) / Math.log(base);
    }

    // Calcula o logaritmo natural (base e) de um valor
    ln(valor) {
        // Valida se valor é positivo
        if (valor <= 0) return 'Erro: logaritmo natural de número não positivo';
        // Retorna o logaritmo natural
        return Math.log(valor);
    }

    // Avalia uma expressão matemática em string, suportando variáveis e funções
    avaliar(expr) {
        // Substitui variáveis (A-Z) pelos valores definidos
        expr = expr.replace(/[A-Z]/g, v => this.vars[v] !== undefined ? this.vars[v] : v);
        // Substitui funções matemáticas por suas versões do Math
        expr = expr.replace(/(sin|cos|tan|sinh|cosh|tanh|abs|sqrt|log|ln|exp)\(/g, 'Math.$1(');
        // Converte porcentagens para fração
        expr = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        // Substitui fatorial por chamada ao método fatorial
        expr = expr.replace(/(\d+)!/g, 'this.fatorial($1)');
        // Substitui potências por Math.pow
        expr = expr.replace(/(\d+(?:\.\d+)?|[A-Z])\^(\d+(?:\.\d+)?|[A-Z])/g, 'Math.pow($1,$2)');
        // Substitui mod por operador de resto
        expr = expr.replace(/mod\(([^)]+)\)/g, '($1%$2)');
        // Garante que divisões sejam feitas corretamente
        expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');
        // Substitui raiz quadrada unicode por Math.sqrt
        expr = expr.replace(/√(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)');
        // Substitui PI e E por seus valores do Math
        expr = expr.replace(/PI/g, 'Math.PI').replace(/E/g, 'Math.E');
        // Se modo de ângulo for graus, converte argumentos de sin/cos/tan para radianos
        if (this.angleMode === 'DEG') {
            expr = expr.replace(/Math\.(sin|cos|tan)\(([^)]+)\)/g, (m, fn, arg) => `Math.${fn}((${arg})*Math.PI/180)`);
        }
        try {
            // Usa eval para calcular a expressão final
            return eval(expr);
        } catch {
            // Retorna erro se a expressão for inválida
            return 'Erro: expressão inválida';
        }
    }

    // Calcula o fatorial de um número inteiro não negativo
    fatorial(n) {
        n = Number(n); // Garante que n é numérico
        if (n < 0) return NaN; // Fatorial não definido para negativos
        if (n === 0 || n === 1) return 1; // Casos base
        let r = 1;
        // Multiplica de 2 até n para obter o fatorial
        for (let i = 2; i <= n; i++) r *= i;
        return r;
    }

    // Define uma variável de uma letra maiúscula
    setVar(nome, valor) {
        // Só permite variáveis de uma letra maiúscula
        if (/^[A-Z]$/.test(nome)) this.vars[nome] = valor;
    }

    // Define o modo de ângulo ('RAD' ou 'DEG')
    setAngleMode(mode) {
        // Só aceita os modos válidos
        if (['RAD', 'DEG'].includes(mode)) this.angleMode = mode;
    }

    // Calcula a média de uma lista de valores
    media(valores) {
        // Converte string para array se necessário
        valores = this._parseArray(valores);
        // Soma todos os valores e divide pelo total
        return valores.reduce((a, b) => a + b, 0) / valores.length;
    }

    // Calcula a mediana de uma lista de valores
    mediana(valores) {
        // Converte string para array e ordena
        valores = this._parseArray(valores).sort((a, b) => a - b);
        const meio = Math.floor(valores.length / 2);
        // Se número de elementos for par, retorna média dos dois centrais
        return valores.length % 2 === 0
            ? (valores[meio - 1] + valores[meio]) / 2
            : valores[meio];
    }

    // Calcula a moda (valor mais frequente) de uma lista
    moda(valores) {
        valores = this._parseArray(valores);
        const freq = {};
        // Conta a frequência de cada valor
        valores.forEach(v => freq[v] = (freq[v] || 0) + 1);
        let max = 0, modas = [];
        // Encontra o(s) valor(es) com maior frequência
        for (let v in freq) {
            if (freq[v] > max) {
                max = freq[v];
                modas = [Number(v)];
            } else if (freq[v] === max) {
                modas.push(Number(v));
            }
        }
        // Retorna único valor ou array de modas
        return modas.length === 1 ? modas[0] : modas;
    }

    // Calcula a variância de uma lista de valores
    variancia(valores) {
        valores = this._parseArray(valores);
        const m = this.media(valores); // Calcula a média
        // Soma dos quadrados das diferenças dividido pelo total
        return valores.reduce((a, b) => a + Math.pow(b - m, 2), 0) / valores.length;
    }

    // Calcula o desvio padrão de uma lista de valores
    desvioPadrao(valores) {
        // Raiz quadrada da variância
        return Math.sqrt(this.variancia(valores));
    }

    // Converte string de números separados por vírgula em array de números
    _parseArray(valores) {
        if (typeof valores === 'string') {
            // Divide a string e converte cada item para número
            return valores.split(',').map(Number);
        }
        // Se já for array, retorna como está
        return valores;
    }

    // Ponto de entrada genérico para executar operações pelo nome
    main(operacao, valor) {
        // Se existir método com o nome da operação, executa
        if (typeof this[operacao] === 'function') {
            return this[operacao](valor);
        }
        // Caso contrário, retorna erro
        return 'Operação inválida';
    }
}

export { Calculadora };


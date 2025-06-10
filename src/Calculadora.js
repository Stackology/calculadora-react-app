// Calculadora.js

class Calculadora {
    constructor() {
        this.vars = {};
        this.angleMode = 'RAD';
    }

    avaliar(expr) {
        expr = expr.replace(/[A-Z]/g, v => this.vars[v] !== undefined ? this.vars[v] : v);
        expr = expr.replace(/(sin|cos|tan|sinh|cosh|tanh|abs|sqrt|log|ln|exp)\(/g, 'Math.$1(');
        expr = expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        expr = expr.replace(/(\d+)!/g, 'this.fatorial($1)');
        expr = expr.replace(/(\d+(?:\.\d+)?|[A-Z])\^(\d+(?:\.\d+)?|[A-Z])/g, 'Math.pow($1,$2)');
        expr = expr.replace(/mod\(([^)]+)\)/g, '($1%$2)');
        expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');
        expr = expr.replace(/√(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)');
        expr = expr.replace(/PI/g, 'Math.PI').replace(/E/g, 'Math.E');
        if (this.angleMode === 'DEG') {
            expr = expr.replace(/Math\.(sin|cos|tan)\(([^)]+)\)/g, (m, fn, arg) => `Math.${fn}((${arg})*Math.PI/180)`);
        }
        try {
            return eval(expr);
        } catch {
            return 'Erro: expressão inválida';
        }
    }

    fatorial(n) {
        n = Number(n);
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
    }

    setVar(nome, valor) {
        if (/^[A-Z]$/.test(nome)) this.vars[nome] = valor;
    }

    setAngleMode(mode) {
        if (['RAD', 'DEG'].includes(mode)) this.angleMode = mode;
    }

    media(valores) {
        valores = this._parseArray(valores);
        return valores.reduce((a, b) => a + b, 0) / valores.length;
    }

    mediana(valores) {
        valores = this._parseArray(valores).sort((a, b) => a - b);
        const meio = Math.floor(valores.length / 2);
        return valores.length % 2 === 0
            ? (valores[meio - 1] + valores[meio]) / 2
            : valores[meio];
    }

    moda(valores) {
        valores = this._parseArray(valores);
        const freq = {};
        valores.forEach(v => freq[v] = (freq[v] || 0) + 1);
        let max = 0, modas = [];
        for (let v in freq) {
            if (freq[v] > max) {
                max = freq[v];
                modas = [Number(v)];
            } else if (freq[v] === max) {
                modas.push(Number(v));
            }
        }
        return modas.length === 1 ? modas[0] : modas;
    }

    variancia(valores) {
        valores = this._parseArray(valores);
        const m = this.media(valores);
        return valores.reduce((a, b) => a + Math.pow(b - m, 2), 0) / valores.length;
    }

    desvioPadrao(valores) {
        return Math.sqrt(this.variancia(valores));
    }

    _parseArray(valores) {
        if (typeof valores === 'string') {
            return valores.split(',').map(Number);
        }
        return valores;
    }

    // Entry point genérico
    main(operacao, valor) {
        if (typeof this[operacao] === 'function') {
            return this[operacao](valor);
        }
        return 'Operação inválida';
    }
}

export { Calculadora };


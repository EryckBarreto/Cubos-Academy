const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor / 100
        });
        return `Depósito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`;
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`
        } else {
            this.saldo = this.saldo - (valor);
            this.historicos.push({
                tipo: "Saque",
                valor: valor / 100
            });
            return `Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`
        };
    },
    extrato: function() {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}\nHistórico:`);
        for (let i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de R$ ${this.historicos[i].valor}`);
        }
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
contaBancaria.extrato();

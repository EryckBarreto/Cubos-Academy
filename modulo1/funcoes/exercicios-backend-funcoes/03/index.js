const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    addProduto: function(produto) {
        for (let item of this.produtos) {
            if (item.id === this.id) {
                item.qtd += this.qtd;
                break;
            } else {
                this.produtos.push(produto);
                break;
            }
        }
    },
    calcularTotalDeItens: function () {
        let totalQtd = 0;
        for (let produto of this.produtos) {
            totalQtd += produto.qtd;
        };
        return totalQtd;
    },
    calcularTotalAPagar: function () {
        let totalPreco = 0;
        for (let produto of this.produtos) {
            totalPreco = totalPreco + (produto.precoUnit * produto.qtd);
        };
        return totalPreco;
    },
    imprimirResumo: function() {
        return `Cliente: ${this.nomeDoCliente}\nTotal de itens: ${this.calcularTotalDeItens()}\nTotal a pagar: R$ ${(this.calcularTotalAPagar()/100).toFixed(2)}.`;
    },
    imprimirDetalhes: function() {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);
        for (let produto of this.produtos) {
            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`)
        }
        console.log("\n");
        return `Total de itens: ${this.calcularTotalDeItens()}\nTotal a pagar: R$ ${(this.calcularTotalAPagar()/100).toFixed(2)}.`;
    },
    calcularDesconto: function() {
        let descontoItemMaisBarato = Infinity;
        let desconto10PorCento = this.calcularTotalAPagar() * 0.10;
        let descontoAplicado = 0;
        for (let produto of this.produtos) {
            if (descontoItemMaisBarato > produto.precoUnit) {
                descontoItemMaisBarato = produto.precoUnit;
            }
        }
        if (descontoItemMaisBarato > desconto10PorCento) {
            descontoAplicado = descontoItemMaisBarato;
        } else {
            descontoAplicado = desconto10PorCento;
        }
        return `O valor do desconto é de R$ ${(descontoAplicado / 100).toFixed(2)}.`;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

function addProdutoAoCarrinho(carrinho, produto) {
    let itemExiste = -1;
    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id === produto.id) {
            itemExiste = i;
            break;
        }
    }
    if (itemExiste === -1) {
        carrinho.produtos.push(produto);
    } else {
        carrinho.produtos[itemExiste].qtd += produto.qtd;
    }
};

addProdutoAoCarrinho(carrinho, novaBermuda);
addProdutoAoCarrinho(carrinho, novoTenis);
console.log(carrinho.produtos);
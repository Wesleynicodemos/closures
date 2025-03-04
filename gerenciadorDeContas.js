function gerenciadorDeContas () {
    let saldo = 0 //Saldo Inicial

    return {
        //Soma o valor ao saldo
        depositarDinheiro: (valor)=> {
             saldo += valor
        },

        //Subtrai o valor do saldo 
        sacarDinheiro: (valor)=> {
            if(valor <= saldo) {
                saldo -= valor
            } else {
                console.log ("Não pode sacar mais que o saldo.")
            }
            
        },

        //Exibe o saldo
        mostrarSaldo: ()=> {
            console.log(`Seu Saldo é de R$ ${saldo},00`)
        }
    }
}

const minhaConta = gerenciadorDeContas();

minhaConta.depositarDinheiro(1000); // Depósito de 1000
minhaConta.mostrarSaldo();  // Exibe o saldo: 1000
minhaConta.sacarDinheiro(500);  // Saque de 500
minhaConta.mostrarSaldo();  // Exibe o saldo: 500
minhaConta.sacarDinheiro(600);  // Não pode sacar mais que o saldo
minhaConta.mostrarSaldo();  // Exibe o saldo: 500
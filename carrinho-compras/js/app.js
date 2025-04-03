let total = 0;
document.getElementById("lista-produtos").innerHTML = '';
document.getElementById("valor-total").innerHTML = 'R$';

function adicionar() {

    let produto = document.getElementById("produto").value;
    let valorUnitario = produto.split('R$')[1];
    let nomeProduto = produto.split('-')[0];
    let quantidade = document.getElementById("quantidade").value;
    let preco = quantidade*valorUnitario;

    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">X${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

   total = total + preco;
   let campoTotal = document.getElementById("valor-total");
   campoTotal.textContent = `R$${total}`
   document.getElementById("quantidade").value = 0;
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = '';
    document.getElementById("valor-total").innerHTML = 'R$'; 
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let confirmar = confirm("Tem certeza que deseja dovolver o jogo?")
    

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        
        
    if (confirmar == true) {
        botao.textContent = "Alugar"
        botao.classList.remove("dashboard__item__button--return")
        imagem.classList.remove('dashboard__item__img--rented')
    } 
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = "Devolver"
        botao.classList.add("dashboard__item__button--return")
    };

};
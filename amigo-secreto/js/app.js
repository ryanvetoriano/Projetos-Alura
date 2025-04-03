let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Informe o nome do amigo");
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert("Nome já adicionado");
        amigo.value = "";
        return;
    }

    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);
    if (lista.textContent =="") {
        lista.textContent = amigo.value; 
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value = "";
}

function sortear() {
    if (amigos.length < 4) {
        alert ("Adicione no minimo 4 amigos");
        amigos.value = "";
        return;
    }
 embaralha(amigos)
 let listaSorteio = document.getElementById("lista-sorteio");
   
 for (let i = 0; i < amigos.length; i++) {
   
   if(i == amigos.length - 1 ) {
  listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "-->" + amigos[0] + "<br>"
   } else {
    listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "-->" + amigos[i+1] + "<br>"
   }
 
 }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById("lista-sorteio").textContent = '';
    document.getElementById("lista-amigos").textContent = '';
    amigos = [];
}
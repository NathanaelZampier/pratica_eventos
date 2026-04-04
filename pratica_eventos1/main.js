const botao = document.getElementById("verificar")

botao.addEventListener("click", function(){
    const valor = document.getElementById("nome").value
    const resposta = document.getElementById("resposta")

    if (valor === "") {
        resposta.textContent = "Digite algo"
    } else if (valor.lenght < 3) {
        resposta.textContent = "nome muito curto"
    } else if (valor === "nathan") {
        resposta.textContent = "certo"
    } else {
        resposta.textContent = "nome valido"
    }

})
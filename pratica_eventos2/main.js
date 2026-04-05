const botao = document.getElementById('verificar')

botao.addEventListener('click', function() {
    const senha = document.getElementById("senha").value
    const feedBack = document.getElementById("retorno")

    if (senha === "") {
        feedBack.textContent = "Digite uma senha"
    } else if (senha === "123456") {
        feedBack.textContent = "senha muito fraca"
    } else if (senha.length < 6) {
        feedBack.textContent = "senha muito curta"
    } else if (senha.length >= 8) {
        feedBack.textContent = "senha forte"
    } else {
        feedBack.textContent = "senha válida"
    }
})
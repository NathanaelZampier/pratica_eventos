const campoNome = document.getElementById('campo-nome')

campoNome.addEventListener('input', function(){
    const valor = campoNome.value
    const feedBack = document.getElementById('retorno')

    if (!valor) {
        feedBack.textContent = "escreva um nome"
    } else if (valor.length < 3) {
        feedBack.textContent = "nome muito curto"
    } else if (valor === "Nathan") {
        feedBack.textContent = "esse é meu nome"
    } else {
        feedBack.textContent = "nome válido"
    }
})
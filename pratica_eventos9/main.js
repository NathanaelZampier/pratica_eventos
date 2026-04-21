const campoNome = document.getElementById('campo-nome')
const retorno = document.getElementById('feedback')

campoNome.addEventListener('input', function(){
    const valor = campoNome.value

    if (!valor) {
        campoNome.style.border = '2px solid red'
        retorno.style.color = 'red'
        retorno.textContent = 'Digite algo'
    }

    if (valor.length < 3) {
        campoNome.style.border = '2px solid red'
        retorno.style.color = 'red'
        retorno.textContent = 'nome muito curto'
    } else {
        campoNome.style.border = '2px solid green'
        retorno.style.color = 'green'
        retorno.textContent = 'nome válido'
    }


})
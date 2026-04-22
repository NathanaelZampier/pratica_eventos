const campoNome = document.getElementById('campo-nome')
const feedback = document.getElementById('feedback')

campoNome.addEventListener('keydown', function(event){
    const valor = campoNome.value.trim()

    if (event.key === 'Enter') {
        event.preventDefault()

        if(!valor) {
            feedback.style.color = 'red'
            feedback.textContent = 'Insira um nome'
        } else if (valor.length < 3) {
            feedback.style.color = 'red'
            feedback.textContent = 'nome curto'
        } else {
            feedback.style.color = 'green'
            feedback.textContent = 'nome válido'
        }
    }


})




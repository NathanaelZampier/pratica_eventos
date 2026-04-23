const form = document.getElementById('formulario')
const campoNome = document.getElementById('campo-nome')
const feedback = document.getElementById('feedback')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const valor = campoNome.value.trim()

    if (!valor) {
        feedback.style.color = 'red'
        feedback.textContent = 'Insira um nome'
    
    } else if (valor.length < 3) {
        feedback.style.color = 'red'
        feedback.textContent = 'nome curto'
    } else {
        feedback.style.color = 'green'
        feedback.textContent = 'nome válido'
    }

    campoNome.value = ''
    campoNome.focus()
})
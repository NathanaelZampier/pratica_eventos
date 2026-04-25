const form = document.getElementById('formulario')
const campoNome = document.getElementById('campo-nome')
const campoEmail = document.getElementById('campo-email')
const campoSenha = document.getElementById('campo-senha')
const botao = document.getElementById('btn')
const feedbackGeral = document.getElementById('feedback-geral')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const valorNome = campoNome.value.trim()
    const valorEmail = campoEmail.value.trim()
    const valorSenha = campoSenha.value.trim()

    let valido = true 

    if (!valorNome) {
        feedbackGeral.textContent = 'insira um nome'
        feedbackGeral.style.color = 'red'
        valido = false
    } else if(valorNome.length < 3) {
        feedbackGeral.textContent = 'nome curto'
        feedbackGeral.style.color = 'red'
        valido = false
    }

    else if (!valorEmail) {
        feedbackGeral.textContent = 'email inválido'
        feedbackGeral.style.color = 'red'
        valido = false
    }

    else if (!valorEmail.includes('@') || (!valorEmail.includes('.'))) {
        feedbackGeral.textContent = 'email inválido'
        feedbackGeral.style.color = 'red'
        valido = false
    }

    else if (!valorSenha) {
        feedbackGeral.textContent = 'senha inválida'
        feedbackGeral.style.color = 'red'
        valido = false
    }
    
    else if (valorSenha.length < 6) {
        feedbackGeral.textContent = 'senha fraca'
        feedbackGeral.style.color = 'red'
        valido = false
    }

    if (valido) {
        feedbackGeral.textContent = 'formulário válido'
        feedbackGeral.style.color = 'green'
    }
    
    campoNome.value = ''
    campoEmail.value = ''
    campoSenha.value = ''
    campoNome.focus()

    
})
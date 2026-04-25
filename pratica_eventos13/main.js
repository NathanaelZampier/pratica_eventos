const form = document.getElementById('formulario')
const campoNome = document.getElementById('campo-nome')
const campoEmail = document.getElementById('campo-email')
const campoSenha = document.getElementById('campo-senha')
const feedbackNome = document.getElementById('feedback-nome')
const feedbackEmail = document.getElementById('feedback-email')
const feedbackSenha = document.getElementById('feedback-senha')
const feedbackGeral = document.getElementById('feedback-geral')
const botao = document.getElementById('btn')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const valorNome = campoNome.value.trim()
    const valorEmail = campoEmail.value.trim()
    const valorSenha = campoSenha.value.trim()

    let valido = true

    feedbackNome.textContent = ''
    feedbackEmail.textContent = ''
    feedbackSenha.textContent = ''
    feedbackGeral.textContent = ''

    if (!valorNome) {
        feedbackNome.textContent = 'insira um nome'
        feedbackNome.style.color = 'red'
        valido = false 
    } else if (valorNome.length < 3) {
        feedbackNome.textContent = 'nome curto'
        feedbackNome.style.color = 'red'
        valido = false
    }

    if (!valorEmail) {
        feedbackEmail.textContent = 'insira um email'
        feedbackEmail.style.color = 'red'
        valido = false
    } else if (!valorEmail.includes('@') || (!valorEmail.includes('.'))) {
        feedbackEmail.textContent = 'insira um email válido'
        feedbackEmail.style.color = 'red'
        valido = false
    }

    if (!valorSenha) {
        feedbackSenha.textContent = 'senha inválida'
        feedbackSenha.style.color = 'red'
        valido = false
    } else if (valorSenha.length < 6) {
        feedbackSenha.textContent = 'senha fraca'
        feedbackSenha.style.color = 'red'
        valido = false
    }

    if (valido) {
        feedbackGeral.textContent = 'formulário valido'
        feedbackGeral.style.color = 'green'
        campoNome.value = ''
        campoEmail.value = ''
        campoSenha.value = ''
    }

    
})

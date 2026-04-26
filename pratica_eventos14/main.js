const form = document.getElementById('formulario')
const campoNome = document.getElementById('campo-nome')
const campoEmail = document.getElementById('campo-email')
const campoSenha = document.getElementById('campo-senha')
const feedbackNome = document.getElementById('feedback-nome')
const feedbackEmail = document.getElementById('feedback-email')
const feedbackSenha = document.getElementById('feedback-senha')
const feedbackGeral = document.getElementById('feedback-geral')
const botao = document.getElementById('btn')

botao.disabled = true

function atualizarBotao() {
    if (validarNome() && validarEmail() && validarSenha()) {
        botao.disabled = false
    } else {
        botao.disabled = true
    }
}

function validarNome() {
    const valorNome = campoNome.value.trim()

    if (!valorNome) {
        feedbackNome.textContent = 'Insira um nome'
        feedbackNome.style.color = 'red'
        campoNome.style.borderColor = 'red'
        return false
    }
    
    else if (valorNome.length < 3) {
        feedbackNome.textContent = 'nome inválido'
        feedbackNome.style.color = 'red'
        campoNome.style.borderColor = 'red'
        return false
    }

    else {
        feedbackNome.textContent = 'nome válido'
        feedbackNome.style.color = 'green'
        campoNome.style.borderColor = 'green'
        return true
    }
}

function validarEmail() {
    const valorEmail = campoEmail.value.trim()

    if (!valorEmail) {
        feedbackEmail.textContent = 'Insira um email'
        feedbackEmail.style.color = 'red'
        campoEmail.style.borderColor = 'red'
        return false
    }

    else if (!valorEmail.includes('@') || (!valorEmail.includes('.'))) {
        feedbackEmail.textContent = 'email inválido'
        feedbackEmail.style.color = 'red'
        campoEmail.style.borderColor= 'red'
        return false
    }

    else {
        feedbackEmail.textContent = 'email válido'
        feedbackEmail.style.color = 'green'
        campoEmail.style.borderColor = 'green'
        return true
    }
}

function validarSenha() {
    const valorSenha = campoSenha.value.trim()

    if (!valorSenha) {
        feedbackSenha.textContent = 'Insira uma senha'
        feedbackSenha.style.color = 'red'
        campoSenha.style.borderColor = 'red'
        return false
    }

    else if (valorSenha.length < 6) {
        feedbackSenha.textContent = 'Senha fraca'
        feedbackSenha.style.color = 'red'
        campoSenha.style.borderColor = 'red'
        return false
    }

    else {
        feedbackSenha.textContent = 'Senha válida'
        feedbackSenha.style.color = 'green'
        campoSenha.style.borderColor = 'green'
        return true
    }
}

campoSenha.addEventListener('input', function(){
    validarSenha()
    atualizarBotao()
})

campoEmail.addEventListener('input', function(){
    validarEmail()
    atualizarBotao()
})

campoNome.addEventListener('input', function(){
    validarNome()
    atualizarBotao()
})



form.addEventListener('submit', function(event){
    event.preventDefault()

    feedbackGeral.textContent = ''

    const nomeValido = validarNome()
    const emailValido = validarEmail()
    const senhaValida = validarSenha()


    if (!nomeValido || !emailValido || !senhaValida) {
        feedbackGeral.textContent = 'dados incorretos'
        feedbackGeral.style.color = 'red'
        return
    }


    feedbackGeral.textContent = 'formulário válido'
    feedbackGeral.style.color = 'green'
    campoNome.value = ''
    campoEmail.value = ''
    campoSenha.value = ''
    campoNome.focus()
    


})
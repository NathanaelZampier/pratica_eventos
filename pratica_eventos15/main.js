const form = document.getElementById('formulario')
const campoNome = document.getElementById('campo-nome')
const campoEmail = document.getElementById('campo-email')


campoNome.addEventListener('blur', function(){
    const valorNome = campoNome.value.trim()

    if (!valorNome) {
        campoNome.style.borderColor = 'red'
    }

    else if (valorNome.length < 3) {
        campoNome.style.borderColor = 'red'
    }

    else {
        campoNome.style.borderColor = 'green'
    }
})

campoEmail.addEventListener('blur', function(){
    const valorEmail = campoEmail.value.trim()

    if (!valorEmail) {
        campoEmail.style.borderColor = 'red'
    }

    else if (!valorEmail.includes('@') || (!valorEmail.includes('.'))) {
        campoEmail.style.borderColor = 'red'
    }

    else {
        campoEmail.style.borderColor = 'green'
    }
})


campoNome.addEventListener('focus', function(){
    campoNome.style.borderColor = 'blue'
})

campoEmail.addEventListener('focus', function(){
    campoEmail.style.borderColor = 'blue'
})


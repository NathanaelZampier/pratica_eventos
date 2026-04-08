const botao = document.getElementById('btn')
const valorNome = document.getElementById('campo-nome')
const lista = document.getElementById('lista-nomes')

botao.addEventListener('click', function(){
    const valor = valorNome.value
    
    if(!valor) {
        alert('insira um nome')
        return
    }

    if (valor.length < 3) {
        alert('nome muito curto')
        return
    }

    const li = document.createElement('li')
        li.textContent = valor
        lista.appendChild(li)
})



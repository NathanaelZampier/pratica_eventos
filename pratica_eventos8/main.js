const botao = document.getElementById('btn')
const campoFilme = document.getElementById('campo-filme')
const lista = document.getElementById('lista')

botao.addEventListener('click', function(){
    const valorFilme = campoFilme.value

    if (!valorFilme) {
        alert('insira um filme válido')
        return
    }

    if (valorFilme.length < 3) {
        alert('filme curto')
        return 
    }

    const listagem = document.querySelectorAll('li')

    for(let item of listagem) {
        if(item.textContent === valorFilme) {
            alert('filme ja inserido')
            campoFilme.value = ''
            campoFilme.focus()
            return
        }
    }

    const li = document.createElement('li')
    li.textContent = campoFilme.value

    li.addEventListener('click', function(){
        if (li.style.textDecoration === 'line-through') {

            if(confirm('deseja desmarcar esse item?')) {
                li.style.textDecoration = 'none'
            }
        } else {
            if(confirm('deseja marcar esse item?')) {
                li.style.textDecoration = 'line-through'
            }
        }
    })

    lista.appendChild(li)
    campoFilme.value = ''
    campoFilme.focus()
})
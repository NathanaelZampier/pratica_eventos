const campoTarefa = document.getElementById('campo-tarefa')
const feedback = document.getElementById('feedback')
const botao = document.getElementById('btn')
const lista = document.getElementById('lista')

botao.addEventListener('click', function(event) {
    const valorTarefa = campoTarefa.value.trim()

    if (!valorTarefa) {
        feedback.textContent = 'Insira uma tarefa'
        return
    }

    else if (valorTarefa.length < 3) {
        feedback.textContent = 'Tarefa muito curta'
        return
    }

    const li = document.createElement('li')

    li.innerHTML = `
        <span class= "texto">${valorTarefa}</span>
        <button class= "check">✔</button>
        <button class= "remover">❌</button>
    `

    
    lista.appendChild(li)
    campoTarefa.value = ''
    campoTarefa.focus()

})


    lista.addEventListener('click', function(event){
        
        if (event.target.classList.contains('check')) {
            const li = event.target.parentElement

            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none'
            } else {
                li.style.textDecoration = 'line-through'
            }
        }

        if (event.target.classList.contains('remover')) {

            const li = event.target.parentElement

            li.remove()
        }

    })
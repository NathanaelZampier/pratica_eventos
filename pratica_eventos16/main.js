const campoTarefa = document.getElementById('campo-tarefa')
const botao = document.getElementById('btn')
const feedback = document.getElementById('feedback')
const lista = document.getElementById('lista')


botao.addEventListener('click', function() {
    const valorTarefa = campoTarefa.value.trim()

    if(!valorTarefa) {
        feedback.textContent = 'Insira uma tarefa'
        return
    }

    else if (valorTarefa.length < 3) {
        feedback.textContent = 'tarefa inválida'
        return
    }

    const li = document.createElement('li')
    li.textContent = valorTarefa
    lista.appendChild(li)

})

lista.addEventListener('click', function(event) {

    if (event.target.tagName === 'LI') {

        if (event.target.style.textDecoration === 'line-through') {
            event.target.style.textDecoration = 'none'
        } else {
            event.target.style.textDecoration = 'line-through'
        }
    }


})

lista.addEventListener('contextmenu', function(event){
    event.preventDefault()

    if (event.target.tagName ==='LI') {
        event.target.remove()
    }
})
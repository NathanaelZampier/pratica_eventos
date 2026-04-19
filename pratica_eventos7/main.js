const botao = document.getElementById('btn')
const campoTarefas = document.getElementById('campo-tarefas')
const lista = document.getElementById('lista')

botao.addEventListener('click', function(){
    const valor = campoTarefas.value

    if (!valor ) {
        alert('isira uma tarefa')
        campoTarefas.focus()
        return
    }

    if (valor.length < 3) {
        alert('tarefa muito curta')
        campoTarefas.focus()
        return
    }

    const itens = lista.querySelectorAll('li')

    for(let item of itens) {
        if (item.textContent === valor) {
            alert('item já existente')
            campoTarefas.focus()
            return
        }
    }

    const li = document.createElement('li')
    li.textContent = valor

    li.addEventListener('click', function(){
        if (li.style.textDecoration === 'line-through') {

            if (confirm('Deseja desmarcar este item?')) {
                li.style.textDecoration = 'none'
            }
        } else {
            if (confirm('Deseja concluir este item?')) {
                li.style.textDecoration = 'line-through'
            }
        }
    })

    lista.appendChild(li)
    campoTarefas.value = ''
    campoTarefas.focus()


})
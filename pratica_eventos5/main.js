
const botao = document.getElementById('btn')
const tarefa = document.getElementById('campo-tarefa')
const lista = document.getElementById('lista')

botao.addEventListener('click', function(){
    const tarefaValor = tarefa.value

    if (!tarefaValor) {
        alert('insira uma tarefa')
        return
    }

    if  (tarefaValor.length < 3) {
        alert('insira uma tarefa valida')
        return
    }

    const li = document.createElement('li')
    li.textContent = tarefaValor
    lista.appendChild(li)

    tarefa.value = ''
})
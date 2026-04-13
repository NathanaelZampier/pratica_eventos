
const botao = document.getElementById('btn')
const inputItem = document.getElementById('campo-compra')
const listaTarefa = document.getElementById('lista')

botao.addEventListener('click', function(){
    const valorInput = inputItem.value

    if (!valorInput) {
        alert('Insira um item')
        inputItem.focus()
        return
    }

    if (valorInput.length < 3) {
        alert('item muito curto')
        inputItem.focus()
        inputItem.value = ''
        return
    }

    const li = document.createElement('li')
    li.textContent = valorInput

    li.addEventListener('click', function(){
        if (li.style.textDecoration === 'line-through') {
            
            if(confirm('Deseja desmarcar este item?')) {
                li.style.textDecoration = 'none'
            }
        } else {
            if (confirm('Deseja concluir este item?')) {
                li.style.textDecoration = 'line-through'
            }
        }

        
    })

    
    listaTarefa.appendChild(li)
    inputItem.value = ''
    inputItem.focus()
    
})
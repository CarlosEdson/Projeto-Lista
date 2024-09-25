const ul = document.querySelector('ul')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {
    let input = document.querySelector('#obj')
    let valor = input.value

    if(input.value == ""){
        alert("ERRO, POR FAVOR PREENCHA O CAMPO DE TAREFAS")
    } else {
        const li = document.createElement('li')
        li.textContent = valor
        ul.appendChild(li)
    }

    console.log(input.value)
})

document.querySelector('#confirmar').addEventListener("click", () => {
    ul.style.textDecoration = "line-through"
})

document.querySelector('#cancelar').addEventListener("click", () => {
    ul.remove(ul)
})
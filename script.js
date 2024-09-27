const ul = document.querySelector('ul')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {
    let camponome = document.querySelector('#obj').value
    
    if(camponome == ""){
        alert("ERRO, POR FAVOR PREENCHA O CAMPO DE TAREFAS")
    } else {

        ul.innerHTML += `<li>${camponome}</li>`

        const button = document.createElement('button')
        li.appendChild(button)
    }

    if(metasProgramadas.includes(camponome)){
        alert("meta já programada na semana")
    } else {
        metasProgramadas.push(camponome)
    }

    console.log(metasProgramadas)
})

document.querySelector('#confirmar').addEventListener("click", () => {
    ul.style.textDecoration = "line-through"
})

document.querySelector('#cancelar').addEventListener("click", () => {
    ul.remove(ul)
})
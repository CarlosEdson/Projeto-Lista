const ul = document.querySelector('ul')
const li = document.querySelector('li')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {

    let camponome = document.querySelector('#obj').value
    
    if(camponome == ""){
        alert("ERRO, POR FAVOR PREENCHA O CAMPO DE TAREFAS")
    } else {
        function addListItem(text){
            const listItemHTML = `<ul><li>${camponome}<div>
                    <button id="cancelar"><i class="ph-bold ph-x"></i></button>
                    <button id="confirmar"><i class="ph-bold ph-check"></i></button>
                </div></li></ul>`
            const list = document.querySelector('ul')
            list.insertAdjacentHTML('beforeend', listItemHTML)
        }
    }

    if(metasProgramadas.includes(camponome)){
        alert("meta já programada na semana")
    } else {
        metasProgramadas.push(camponome)
    }

    addListItem()
    console.log(metasProgramadas)
})
/*

document.querySelector('#confirmar').addEventListener("click", () => {
    li.style.textDecoration = "line-through"
})

document.querySelector('#cancelar').addEventListener("click", () => {
    ul.remove(ul)
})
    */
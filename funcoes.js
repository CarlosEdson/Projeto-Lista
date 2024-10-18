let taref = []

document.querySelector('#adicionar').addEventListener
('click', () => {
    let camponome = document.querySelector('#campo-tarefas').value

    if(camponome === ""){
        alert("ERRO, CAMPO NÃO PREENCHIDO")
    } else {
        if(taref.includes(camponome)){
            alert("ERRO, JÁ CADASTRADO")
        } else {
            taref.push(camponome)
        }
    }

    function criandoElementos(){
        let li = document.createElement('li')
        let ul = document.querySelector('ul')
        ul.appendChild(li)
        li.innerHTML += camponome

        let botaoConfirmar = document.createElement('button')
        li.appendChild(botaoConfirmar)

        let botaoCancelar = document.createElement('button')
        li.appendChild(botaoCancelar)
    }

    criandoElementos()

    console.log(taref)  //campo de acompanhamento
    console.log(camponome) //campo de acompanhamento
    console.log(taref.length)
})
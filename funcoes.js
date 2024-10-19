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

        function criandoElementos(){
            let li = document.createElement('li')
            let ul = document.querySelector('ul')
            ul.appendChild(li)
            li.innerHTML += camponome

            let checkbox = document.createElement('input:checkbox')
            li.appendChild(checkbox)
            checkbox.innerHTML = '<input type="checkbox">'
            checkbox.style.position = "absolute";
            checkbox.addEventListener("click", () => {
                li.style.textDecoration = "line-through";
            })
    
            let botaoCancelar = document.createElement('button')
            li.appendChild(botaoCancelar)
            botaoCancelar.innerHTML = `<i class="ph-bold ph-x"></i>`
            botaoCancelar.style.background = "red";
            botaoCancelar.style.color = "black";
            botaoCancelar.style.fontSize = "15px";
            botaoCancelar.style.cursor = "pointer";
    
            botaoCancelar.addEventListener('click', () => {
                ul.removeChild(li)
                taref.pop(ul)
            })
        }
        criandoElementos()
    }


    console.log(taref)  //campo de acompanhamento
    console.log(camponome) //campo de acompanhamento
    console.log(taref.length) //campo de acompanhamento
})
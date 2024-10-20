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
            let div = document.createElement('div')
            div.appendChild(li)
            li.innerHTML += camponome

            ul.appendChild(div)
            div.style.display = "flex";

            let checkbox = document.createElement('input:checkbox')
            div.appendChild(checkbox)
            checkbox.innerHTML = '<input type="checkbox">'
            checkbox.style.position = "absolute";
            checkbox.style.margin = "5px";
            checkbox.addEventListener("click", () => {
                li.style.textDecoration = "line-through";
                alert("PARABENS, TAREFA CONCLUIDA")
            })
    
            let botaoCancelar = document.createElement('button')
            div.appendChild(botaoCancelar)
            botaoCancelar.innerHTML = `<i class="ph-bold ph-x"></i>`
            botaoCancelar.style.background = "red";
            botaoCancelar.style.color = "black";
            botaoCancelar.style.fontSize = "15px";
            botaoCancelar.style.cursor = "pointer";
            botaoCancelar.style.height = "20px";
            botaoCancelar.style.width = "20px";
            botaoCancelar.style.position = "absolute";
            botaoCancelar.style.marginLeft = "85%";
            botaoCancelar.style.marginTop = "3px";
    
            botaoCancelar.addEventListener('click', () => {
                ul.removeChild(div)
                taref.pop(ul)
            })
        }
        criandoElementos()
    }


    console.log(taref)  //campo de acompanhamento
    console.log(camponome) //campo de acompanhamento
    console.log(taref.length) //campo de acompanhamento
})
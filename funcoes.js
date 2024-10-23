let taref = []

document.addEventListener('keypress', (event) => {
    if(event.key == "Enter"){
            event.preventDefault();
        
            let camponome = document.querySelector('#campo-tarefas').value
        
            if(camponome === ""){
                alert("ERRO, CAMPO NÃO PREENCHIDO")
            } else {
                if(taref.includes(camponome)){
                    alert("ERRO, JÁ CADASTRADO")
                } else {
                    taref.push(camponome)
                    
                    function criandoElementos(){
                        let li = document.createElement('li')
                        let ul = document.querySelector('ul')
                        let div = document.createElement('div')
                        li.innerHTML += camponome
                        div.appendChild(li)
                        ul.appendChild(div)
                        div.style.display = "flex";
                        div.style.justifyContent = "space-between";
                        div.style.marginLeft = "5%";
                        div.style.width = "87%";
                        div.style.height = "20px";
                        div.style.overflow = "auto";
                        div.style.border = "1px solid green";
                        
                        let checkbox = document.createElement('input:checkbox')
                        div.appendChild(checkbox)
                        ul.appendChild(div)
                        checkbox.innerHTML = '<input type="checkbox">'
                        checkbox.style.position = "absolute";
                        checkbox.style.margin = "5px";
                        checkbox.addEventListener("click", () => {
                        li.style.textDecoration = "line-through";
                        alert("PARABENS, TAREFA CONCLUIDA")
                        taref.pop(div)
                        })
            
                        let botaoCancelar = document.createElement('button')
                        div.appendChild(botaoCancelar)
                        ul.appendChild(div)
                        botaoCancelar.innerHTML = `<i class="ph-bold ph-x"></i>`
                        botaoCancelar.style.background = "red";
                        botaoCancelar.style.color = "black";
                        botaoCancelar.style.fontSize = "15px";
                        botaoCancelar.style.cursor = "pointer";
                        botaoCancelar.style.height = "20px";
                        botaoCancelar.style.width = "20px";
                        botaoCancelar.style.position = "absolute";
                        botaoCancelar.style.marginLeft = "280px";
                        botaoCancelar.style.marginTop = "3px";
                
                        botaoCancelar.addEventListener('click', () => {
                            ul.removeChild(div)
                            taref.pop(ul)
                        })
                    }
                    criandoElementos()
                }
                document.querySelector('#campo-tarefas').value = "";
            }
            document.querySelector('#campo-tarefas').focus()
        
            console.log(taref)  //campo de acompanhamento
            console.log(camponome) //campo de acompanhamento
            console.log(taref.length) //campo de acompanhamento
    }
})

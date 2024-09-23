const ul = document.querySelector('ul')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {
    let input = document.querySelector('#obj')
    let valor = input.value

    const li = document.createElement('li')
    li.textContent = valor
    li.setAttribute()
    ul.appendChild(li);



    input.textContent = ""
    input.focus()





    console.log(input.value)
})
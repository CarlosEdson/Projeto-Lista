const ul = document.querySelector('ul')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {
    let input = document.querySelector('#obj')
    let valor = input.value

    input.textContent = " "
    input.focus()

    const li = document.createElement('li')
    li.textContent = valor
    ul.appendChild(li)

    console.log(input.value)
})

document.querySelector('#confirmar').addEventListener("click", () => {
    ul.style.background("black")
})
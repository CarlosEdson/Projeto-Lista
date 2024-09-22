let input = document.querySelector('#obj')
const ul = document.querySelector('ul')
let metasProgramadas = []

document.querySelector('button').addEventListener("click", () => {
    let valor = input.value

    const li = document.createElement('li')
    li.innerHTML = valor
    ul.appendChild('li')



    console.log(input.value)
})
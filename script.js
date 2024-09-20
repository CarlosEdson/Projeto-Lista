let metas = document.querySelector('#obj')

document.querySelector('button').addEventListener("click", () => {
    resultado.innerHTML += metas.value
    resultado.innerHTML += ("<br>")
})
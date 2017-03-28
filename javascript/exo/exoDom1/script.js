

function frouge(r){
    document.querySelector("h1").classList.remove("cgreen")
    document.querySelector("h1").classList.remove("cunder")
    document.querySelector("h1").classList.add("cred")
}
function fligne(l){
    document.querySelector("h1").classList.remove("cgreen")
    document.querySelector("h1").classList.add("cunder")
    document.querySelector("h1").classList.remove("cred")
}
function fvert(v){
    document.querySelector("h1").classList.add("cgreen")
    document.querySelector("h1").classList.remove("cunder")
    document.querySelector("h1").classList.remove("cred")
}

document.getElementById('red').addEventListener('click', frouge)
document.getElementById('under').addEventListener('click', fligne)
document.getElementById('green').addEventListener('click', fvert)

var btn1 = document.querySelector('#ajout')
var liste = []
liste = document.querySelector('li')
var newLi
var texte


function ajout(){
    texte = prompt("Entrer un element de votre liste")
    newLi = document.createElement("li")
    newLi.innerHTML = '<button type="button" name="button">X</button><span>' + texte + '</span>'
    document.querySelector("ul").appendChild(newLi);
    newLi.addEventListener('click', retrait)
}

function retrait(){
    this.parentNode.removeChild("li")
}

btn1.addEventListener("click", ajout)

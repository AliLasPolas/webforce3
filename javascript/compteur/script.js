function comptage(e){
    var compteur = document.querySelector('p').textContent;
    var el = document.querySelector('textarea').value.length;
    var le = 200-el
    document.querySelector('p').textContent= le;
    if (le < 0) {
        document.querySelector('#counter').classList.add("red");
    }
    else{
        document.querySelector('#counter').classList.remove("red");
    }
}

document.querySelector('textarea').addEventListener('keydown', comptage)

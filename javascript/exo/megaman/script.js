var all = document.querySelector("*")
var background = document.querySelector("section");
var megaman = document.querySelector("img");
var pos = 0;
var i = 0;
var id;
var di;


function anim(){
    for (var d = 0; d < 500; d++) {
    avance()
    id = clearInterval()
}
}
function avance(){
    id = setInterval(avance, 2);
            megaman.style.left = pos + 'px'
            pos++;
}
function recule(){
        for (var e = 0; e < 1; e++) {
            megaman.style.left = pos + 'px'
            pos--;
        }
}

all.addEventListener("click", anim)

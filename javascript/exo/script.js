var e = 0;
var d = 0;
var i = 0;
var rectangle = document.getElementById('rectangle')
var btn = document.getElementById('btn');

function displayColor(c){
    if (d == 0) {
        document.getElementById('rectangle').classList.remove('cyan')
        d = d+1
    }
    else if(d == 1){
        document.getElementById('rectangle').classList.add('cyan')
        d = d-1
    }

}

function displayRec(r){
    if (i == 1) {
        document.getElementById('rectangle').classList.remove('hide')
        i = i-1
    }
    else if(i == 0){
        document.getElementById('rectangle').classList.add('hide')
        i = i+1
    }
}

function displayGreen(g){
    if (e == 0){
        document.getElementById('rectangle').classList.add('green')
        e = e+1;
    }
    else if (e == 1){
        document.getElementById('rectangle').classList.remove('green')
        e = e-1;
    }
}

btn.addEventListener('click', displayRec);
rectangle.addEventListener('dblclick', displayGreen);
rectangle.addEventListener('mouseenter', displayColor);
rectangle.addEventListener('mouseout', displayColor);

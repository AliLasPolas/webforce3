var nbr;
var player = 0;
var computer = 0;
var tir;

nbr = prompt("Séléctionnez votre nombre de lancé de dés (1 min, 10 max)");
nbr = parseInt(nbr);
if (nbr > 10){
    nbr = 10;
}
if (nbr == 0){
    nbr = 1;
}

for(i=0; i < nbr; i++){
    tir = Math.random();
    if(tir < 1/6){
        tir = 1;
    }
    else if(tir < 4/6){
        tir = 2;
    }
    else if(tir < 3/6){
        tir = 3;
    }
    else if(tir < 4/6){
        tir = 4;
    }
    else if(tir < 5/6){
        tir = 5;
    }
    else if(tir < 1){
        tir = 6;
    }
    player = player + tir
    var i1 = i+1
    document.write("<br>Votre lancé numéro " + i1 + " est " + tir)
}

document.write("<br><br>Votre total est " + player + "<br>")

for(d=0; d < nbr; d++){
    tir = Math.random();
    if(tir < 1/6){
        tir = 1;
    }
    else if(tir < 4/6){
        tir = 2;
    }
    else if(tir < 3/6){
        tir = 3;
    }
    else if(tir < 4/6){
        tir = 4;
    }
    else if(tir < 5/6){
        tir = 5;
    }
    else if(tir < 1){
        tir = 6;
    }
    computer = computer + tir
    var d1 = d+1;
    document.write("<br>Le lancé numéro " + d1 + " de l'adversaire est " + tir)
}

document.write("<br><br>Son total est " + computer + "<br>")

if (computer > player){
    document.write("<br>Du coup vous avez perdu.")
}
if (computer < player){
    document.write("<br>Du coup vous avez gagné.")
}

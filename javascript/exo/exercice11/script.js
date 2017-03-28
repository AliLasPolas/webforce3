var heure = prompt("Heure ?")
var minute = prompt("Minute ?")
var secondes = prompt("Secondes ?")

if (secondes > 59 || minute > 59 || heure > 23){
    alert("Pas possible")
}

else {

secondes++
if (secondes == 60){
    secondes = 0
    minute++
}
if (minute == 60){
    minute = 0
    heure++
}
if (heure == 24){
    heure = 0
}

alert("Votre heure une seconde plus tard est : " + heure + 'h' + minute + 'm' + secondes + 's' )
}

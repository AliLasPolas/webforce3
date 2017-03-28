var nb1
var nb2

nb1 = prompt("Entrez le premier nombre ")
nb2 = prompt("Entrez le second nombre ")
nb1 = parseFloat(nb1)
nb2 = parseFloat(nb2)

if (nb1 > nb2){
    alert("Votre premier nombre " + nb1 + " est supérieur a votre second nombre " + nb2)
}
else if (nb1 < nb2){
    alert("Votre second nombre " + nb2 + " est supérieur a votre premier nombre " + nb1)
}
else if (nb1 = nb2){
    alert("Votre premier nombre " + nb1 + " est égal a votre second nombre " + nb2)
}

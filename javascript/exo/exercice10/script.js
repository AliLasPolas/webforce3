var mois
mois = prompt("Entrez le numéro de votre mois : ")
mois = parseInt(mois)

if (mois == 0 || mois > 12) {
    alert("Nombre non valide.")
}

else {
    switch (mois) {
    case 1:
        alert("Il y a 31 jours en Janvier")
        break;
    case 2:
        alert("Il y a 28 ou 29 jours en Février")
        break;
    case 3:
        alert("Il y a 31 jours en Mars")
        break;
    case 4:
        alert("Il y a 30 jours en Avril")
        break;
    case 5:
        alert("Il y a 31 jours en Mai")
        break;
    case 6:
        alert("Il y a 30 jours en Juin")
        break;
    case 7:
        alert("Il y a 31 jours en Juillet")
        break;
    case 8:
        alert("Il y a 31 jours en Aout")
        break;
    case 9:
        alert("Il y a 30 jours en Septembre")
        break;
    case 10:
        alert("Il y a 31 jours en Octobre")
        break;
    case 11:
        alert("Il y a 30 jours en Novembre")
        break;
    case 12:
        alert("Il y a 31 jours en Décembre")
        break;
    }
}

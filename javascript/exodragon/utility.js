function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choixArme(wpn){
	alert("Décidez d'une arme")
	arme = prompt("1 pour le nunchaku, 2 pour l'épée, 3 pour la hache")
	arme = parseInt(arme)
	return arme;
}

function armes(){
	if (arme == 1){
		force--
		vitesse++
		document.querySelector('#lore').textContent= 'Vous avez choisi le nunchaku. Face a un dragon. Bonne chance.'

	}
	else if (arme == 2){
		document.querySelector('#lore').textContent= 'Vous avez choisi l\'épée mon fils, comme les plus traditionnels des tueurs de dragons '

	}
	else if (arme == 3){
		force++
		vitesse--
		document.querySelector('#lore').textContent= 'Vous avez choisi la hache mon fils. '
	}
}

function suivant(e){
    document.querySelector('#picture').src= intro[av].image
    document.querySelector('#lore').textContent= intro[av].text
    av++
    switch (av) {
        // case 13:
        // arme = choixArme();
        //     break;
        // case 14:
        // armes();
        //     break;
        case 1:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;
        case 10:

            break;
        default:

    }

}

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choixArme(){
	do {
		arme = prompt("Choisir l'arme (épée, hache ou nunchaku)")
		if (arme == 'épée') {
			arme = 1
		}
		if (arme == 'nunchaku') {
			arme = 2
		}
		if (arme == 'hache') {
			arme = 3
		}
	} while (arme !=1 || arme !=2 || arme !=3 || );
	return weapon;
}

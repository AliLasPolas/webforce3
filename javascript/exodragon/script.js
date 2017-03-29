var av = 0;
var next = 0;
var button = document.querySelector("a");
var arme;
var index =
[
    { number: 0, image: 'img/storm.jpg', text: 'Les vents se changent en tempête'          },
    { number: 1, image: 'img/thunder1.jpg', text: 'Le tonnerre enrage l\'océan'           },
    { number: 2, image: 'img/sea.jpg', text: 'Le rugissement des vagues sortent de son sommeil le dragon qui a vécu 1000 années '   },
    { number: 3, image: 'img/dragon.jpg', text: 'Le dragon vous en tient rigueur.'         },
    { number: 4, image: 'img/dragon.jpg', text: 'Il a décidé de vous faire les fesses.'       },
    { number: 5, image: 'img/jesus.jpg', text: 'Mais Jésus viens a votre secour !' },
    { number: 6, image: 'img/jesus.jpg', text: 'Il a décidé de vous aider' },
    { number: 7, image: 'img/jesus.jpg', text: 'Jésus vous propose trois armes' },
    { number: 8, image: 'img/nunchaku.jpg', text: 'Le nunchaku...' },
    { number: 9, image: 'img/sword.jpg', text: 'L\'épée...' },
    { number: 10, image: 'img/axe.jpg', text: 'Ou la hache.' },
    { number: 11, image: 'img/jesus.jpg', text: '"Choisis ton arme mon fils." Vous dit Jésus.' },
    { number: 12, image: 'img/jesus.jpg', text: '"Les armes sont toutes aussi puissantes que lourdes. La hache est très forte mais trop lourde, le nunchaku plus faible mais plus léger, et l\'épée un peu entre les deux." ' },
    { number: 13, image: 'img/jesus.jpg', text: 'Vous faites votre choix.' },
    { number: 14, image: 'img/dragon.jpg', text: 'Tour Eiffel la nuit' },
    { number: 15, image: 'img/dragon.jpg', text: 'Tour Eiffel la nuit' },
    { number: 16, image: 'img/dragon.jpg', text: 'Tour Eiffel la nuit' },
];




function suivant(e){
    av++
    document.querySelector('#picture').src= index[av].image
    document.querySelector('#lore').textContent= index[av].text
    switch (av) {
        case 13:
            arme = choixArme()
            break;
        case 1:

            break;
        case 2:

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

button.addEventListener('click', suivant)

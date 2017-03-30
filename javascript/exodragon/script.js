var intro = [ { image: 'img/storm.jpg', text: 'Les vents se changent en tempête'          },
    { image: 'img/thunder1.jpg', text: 'Le tonnerre enrage l\'océan'           },
    { image: 'img/sea.jpg', text: 'Le rugissement des vagues éveille une ancienne créature. '   },
    { image: 'img/thunder.jpg', text: 'Au loin, vous apercevez un dragon. '   },
    { image: 'img/dragon.jpg', text: 'La créature mythique vous en veut.'         },
    { image: 'img/dragon.jpg', text: 'Il vous tiens rigueur pour son éveil.'       },
    { image: 'img/boat.jpg', text: 'Il perce la coque du bateau' },
    { image: 'img/fire.jpg', text: 'La voile prend feu' },
    { image: 'img/titanic.jpg', text: 'Le bateau coule' },
    { image: 'img/black.jpg', text: '...' },
    { image: 'img/black.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/ile.jpg', text: 'Vous ouvrez les yeux' },
    { image: 'img/ile.jpg', text: 'C\'est une ile déserte' },
    { image: 'img/ile.jpg', text: 'Vous avez échoué ici après avoir été tabassé par le dragon' },
    { image: 'img/ile.jpg', text: 'Vous ouvrez les yeux' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/black2.jpg', text: '...' },
    { image: 'img/axe.jpg', text: 'Ou la hache.' },
    { image: 'img/jesus.jpg', text: '"Choisis ton arme mon fils." Vous dit Jésus.' },
    { image: 'img/jesus.jpg', text: 'Très bien mon fils' },
    { image: 'img/jesus.jpg', text: 'Texte réservé pour la fonction armes' },
    { image: 'img/jesus.jpg', text: 'Nous allons désormais ' },
];

var av = 0;
var next = 0;
var button = document.querySelector("a");
var arme;
var hp = 150
var force = 2
var vitesse = 2
var defense = 2
var resistance = 2
var dforce = 2
var dvitesse = 2
var dres = 2
var dhp = 200

button.addEventListener('click', suivant)

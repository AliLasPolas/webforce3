var ddj = new Date('2007-07-07');
var jour =  ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var date = ddj.getDate();
var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
var an = ddj.getFullYear();


var voiture = {}
    voiture.marque = "Toyota";
    voiture.an = 2005;
    voiture.date = ddj;
    voiture.passagers = ['Bob','Alice'];


document.write('<h1>L\'objet voiture</h1><h2>Informations de la voiture: </h2> <ul><li>Marque de la voiture : ' + voiture.marque
+ '<li> Année de fabriquation :' + voiture.an + '</li>'
+ '<li> Date d\'achat de la voiture ' + jour[ddj.getDay()] + ' ' + date + ' ' + mois[ddj.getMonth()] + ' ' + an + '</li>'
+ '<li> Passager 1 de la voiture : ' + voiture.passagers[0] + '</li>'
+ '<li> Passager 2 de la voiture : ' + voiture.passagers[1] + '</li>' )

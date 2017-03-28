// var ddj = new Date();
// var jour =  ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
// var date = ddj.getDate();
// var mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
// var an = ddj.getFullYear();
//
//
// document.write('Nous sommes le ' + jour[ddj.getDay()] + ' ' + date + ' ' + mois[ddj.getMonth()] + ' ' + an)
//

// const TAUX = 0.2;
// var ht;
// var tva;
// var ttc;
// var remise = 1;
// var bool;
//
// ht = prompt("Entrez votre montant Hors Taxe : ");
// ht = parseFloat(ht);
// bool = prompt(" Profitez vous d'une remise ? y/n");
// if (bool == "y"){
//     remise = prompt("Entrez le montant en % de votre remise.");
//     remise = parseFloat(remise);
//     remise = 1 - remise / 100;
// }
// tva = ht*TAUX;
// ttc = (ht+tva)*remise;
// remise = ht + tva - ttc
//
// document.write("Votre montant Hors Taxe est :" + ht + '€' + "<br>Votre montant de TVA est " + tva + '€' + "<br>Votre montant Toute Taxe Comprise est " + ttc + '€' + '<br>Votre remise est de ' + remise + '€' )

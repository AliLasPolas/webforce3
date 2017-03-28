var ht;
var ttc;
var tva;

ht = prompt("Entrez votre montant HORS TAXE : ");
ht = parseInt(ht)

tva = ht*0.2;
ttc = tva + ht;

document.write("Votre montant Hors Taxe est :" + ht)
document.write("Votre montant TVA est :" + tva)
document.write("Votre montant Toute taxe comprise est :" + ttc)

// var nb1;
// var nb2;
// var op;
// var result
//
// nb1 = prompt("Entrez votre premier nombre : ")
// op = prompt("Entrez votre opérateur (+, -, *, /) : ")
// nb2 = prompt("Entrez votre second nombre : ")
//
// nb1 = parseFloat(nb1);
// nb2 = parseFloat(nb2);
//
// switch(op) {
//     case '+' :
//     case 'Addition' :
//     case 'addition' :
//     result = nb1 + nb2
//     break;
//
//     case '-' :
//     case 'Soustraction' :
//     case 'soustraction' :
//     result = nb1 - nb2;
//     break;
//
//     case '*' :
//     case 'Multiplication' :
//     case 'multiplication' :
//     result = nb1 * nb2;
//     break;
//
//     case '/' :
//     case 'Division' :
//     case 'division' :
//         if (nb2==0){
//             alert("Faut pas diviser par zéro !!!!!!!!!!!!!!!")
//         }
//         else{
//         result = nb1 / nb2;
//         break;
//     }
//
//     default :
//      alert("Apprenez a lire.")
// }
//
// document.write("Votre résultat est " + result)
// var nb1;
// var nb2
//
//
//  nb1 = prompt("Choissisez Pierre, Feuille ou Ciseaux")
// alert("Vous avez choissi " + nb1)
//
//
// nb2 = Math.random()
// alert(" NB2 =  " + nb2)
//
// if (nb2 > 0 && nb2 < 1/3 ) {
//     alert("Votre adversaire a joué Pierre")
//     nb2 = "Pierre"
// }
// else if (nb2 > 1/3 && nb2 < 2/3 ) {
//     alert("Votre adversaire a joué Feuille")
//     nb2 = "Feuille"
// }
// else if (nb2 > 2/3 && nb2 < 1) {
//     alert("Votre adversaire a joué Ciseaux")
//     nb2 = "Ciseaux"
// }


// if(nb1 == nb2) {
//     alert("Match nul.")
// }
//
// else if(nb1 == "Pierre"){
//     if (nb2 == "Ciseaux") {
//         alert("Vous avez gagné")
//     }
//     else if (nb2 == "Feuille"){
//         alert("Vous avez perdu")
//     }
// }
// else if(nb1 == "Feuille" ){
//     if (nb2 == "Pierre") {
//         alert("Vous avez gagné")
//     }
//     else if (nb2 == "Ciseaux") {
//         alert("Vous avez perdu")
//     }
// }
// else if(nb1 == "Ciseaux"){
//     if (nb2 == "Feuille"){
//         alert("Vous avez gagné")
//     }
//     else if (nb2 == "Pierre") {
//         alert("Vous avez perdu")
//     }
// }

// else if(nb2 == "Pierre" && nb1 == "Ciseaux" ){
//     alert("Vous avez perdu")
// }
// else if(nb2 == "Feuille" && nb1 == "Pierre" ){
//     alert("Vous avez perdu")
// }
// else if(nb2 == "Ciseaux" && nb1 == "Feuille" ){
//     alert("Vous avez perdu")
// }

// var camarades = ['Lakhdar', 'Mohamadou', 'Omar', 'James', 'Cedric', 'Anyssa','Caroline','Amadou','Stevy','Maryam','Komakan']
//
// var nb = prompt("Choissisez le nombre d'intègres camarades a afficher : ");
// nb = parseInt(nb);
// if (nb > camarades.length ) {
//     nb = camarades.length;
// }
// document.write("<h1>Liste des intègres camarades en formation :</h1>");
// document.write("<ul>");
// for (var index=0; index < nb; index++){
//     document.write("<li>" + camarades[index] + "</li>")
// }
// document.write("</ul>");

// var phrases =
// [
//     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//     "Aenean commodo ligula eget dolor. Aenean massa.",
//     "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//     "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     "Nulla consequat massa quis enim.",
//     "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
//     "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
//     "Nullam dictum felis eu pede mollis pretium.",
//     "Integer tincidunt. Cras dapibus.",
//     "Vivamus elementum semper nisi.",
//     "Aenean vulputate eleifend tellus.",
//     "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
//     "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
//     "Phasellus viverra nulla ut metus varius laoreet.",
//     "Quisque rutrum. Aenean imperdiet.",
//     "Etiam ultricies nisi vel augue.",
//     "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
//     "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//     "Aenean commodo ligula eget dolor. Aenean massa.",
//     "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
//     "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     "Nulla consequat massa quis enim.",
//     "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
//     "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
//     "Nullam dictum felis eu pede mollis pretium.",
//     "Integer tincidunt. Cras dapibus.",
//     "Vivamus elementum semper nisi.",
//     "Aenean vulputate eleifend tellus.",
//     "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
//     "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
//     "Phasellus viverra nulla ut metus varius laoreet.",
//     "Quisque rutrum. Aenean imperdiet.",
//     "Etiam ultricies nisi vel augue.",
//     "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
//     "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ipsuminus max.",
//     "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
//     "Maecenas nec odio et ante tincidunt tempus.",
//     "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
//     "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
//     "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
//     "Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
// ];
//
// var size = 0;
// var line;
// var temp;
// var i;
//
// for (i=0; i < phrases.length; i++ ){
//     temp = phrases[i].length;
//     document.write("<br> La longueur de la phrase numéro " + (i + 1) + " est de " + temp);
//     if (temp > size){
//         size = temp;
//         line = i + 1;
//     }
// }
//
//
// document.write("<br> <br> <h2> La phrase la plus longue fais " + size + " caractères et est la phrase numéro " + line + "</h2>" )

//
// var nombre;
//
// do {
//     nombre = prompt("Entrez un nombre ")
// } while(isNaN(nombre))
//
// document.write(nombre)

function calcul ( nb1,op,nb2){

switch(op) {
    case '+' :
    result = nb1 + nb2
    break;

    case '-' :
    result = nb1 - nb2;
    break;

    case '*' :
    result = nb1 * nb2;
    break;

    case '/' :
        if (nb2==0){
            alert("Faut pas diviser par zéro !!!!!!!!!!!!!!!")
        }
        else{
        result = nb1 / nb2;
        break;
    }

    default :
     alert("Apprenez a lire.")
}

document.write("Votre résultat est " + result)

}

calcul(55,'*',4);

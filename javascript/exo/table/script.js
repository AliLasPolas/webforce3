'use strict';

var axeY
var axeX
var result
var choix = window.prompt("Entrer le nombre de tables entier")
choix = parseInt(choix);

function table(t){

for (var i = 0; i < choix; i++) {
    document.write("<tr>");
        for (var o = 0; o < choix; o++) {
            axeY = i+1;
            axeX = o+1;
            result = axeY * axeX;
            if (axeY == axeX) {
                document.write('<td class="equal">');
            }
            else {
                document.write('<td class="notequal">');
            }
            document.write(result);
            document.write("</td>");
        }
    document.write("</tr>");
    }
}

document.write("<table><tbody>");
table();
document.write("</tbody></table>");

var prenom = ['Marine', 'Jean-Luc', 'Francois', 'Emmanuel', 'Benois', 'Henry' ]
document.write("<ul>")
for (var i = 0; i < prenom.length; i++) {
    document.write('<li>' + prenom[i] + '</li>')
}
document.write("</ul>")

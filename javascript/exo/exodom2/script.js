var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')

function rouge(r){
    document.querySelectorAll('div.rond1').classList.remove("green")
    document.querySelectorAll('div.rond2').classList.remove("yellow")
    document.querySelectorAll('div.rond3').classList.add("red")}
function vert(r){
    document.querySelectorAll('div.rond1').classList.add("green")
    document.querySelectorAll('div.rond2').classList.remove("yellow")
    document.querySelectorAll('div.rond3').classList.remove("red")}
function jaune(r){
    document.querySelectorAll('div.rond1').classList.remove("green")
    document.querySelectorAll('div.rond2').classList.add("yellow")
    document.querySelectorAll('div.rond3').classList.remove("red")
}

btn1.addEventListener('click', rouge)
btn2.addEventListener('click', vert)
btn3.addEventListener('click', jaune)

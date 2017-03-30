var btn = document.querySelector('#my-button')
var menu = document.querySelector('nav')
var all = []
all = document.querySelector('*')

function display(event){
    if (event.target == btn) {
        menu.style.display = menu.style.display === 'none' ? '' : 'none';
    }
    else {
        menu.style.display = 'none'
    }
}


all.addEventListener('click', display)

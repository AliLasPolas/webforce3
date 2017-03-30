var btn = $('#my-button')
var all = $('*').not('#my-button')
var i = 0;

function display(){
    $('nav').fadeToggle(500)
}

btn.on('click', display)

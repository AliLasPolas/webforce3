var i =0
var liste = []
liste = $("nav > ul > li");
liste.children('ul').slideUp(0);

function display(){
    $(this).children('ul').slideToggle(500);
        $(this).children('i').toggleClass('fa-arrow-circle-down')
        $(this).children('i').toggleClass('fa-arrow-circle-up')
}

liste.on('click', display)

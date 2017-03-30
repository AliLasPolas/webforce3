var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];
var number = 1;
var timer
function refresh(n){
    $('img').attr('src',slides[number].image)
    $('figcaption').attr('textContent', slides[number].legend)
}
function display(){
    $("nav").toggleClass("hide")
}
function previous(){
    number--
    if (number == -1) {
        number = 5
    }
    refresh()
}

function play(){
    $('#slider-toggle').toggleClass('hide')
    $('#slider-stop').toggleClass('hide')
    timer= setInterval(next, 2000);
}

function stop(){
    $('#slider-toggle').toggleClass('hide')
    $('#slider-stop').toggleClass('hide')
    clearInterval(timer);
}

function next(){
    number++
    if (number == 6) {
        number = 0
    }
    refresh()
}
function rand(){
    number = getRandomInteger(0, 5);
    refresh()
}

$("#toolbar-toggle").on('click', display)
$("#slider-previous").on('click', previous)
$("#slider-toggle").on('click', play)
$("#slider-stop").on('click', stop)
$("#slider-next").on('click', next)
$("#slider-random").on('click', rand)

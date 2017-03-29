var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];
var btn_toggle = $("#toolbar-toggle")
var btn_previous = $("#slider-previous")
var btn_play = $("#slider-toggle")
var btn_stop = $("#slider-stop")
var btn_next = $("#slider-next")
var btn_random = $("#slider-random")
var number = 1;
var d
var timer

function display(){
    $("nav").toggleClass("hide")
}
function previous(){
    number--
    if (number == 0) {
        number = 6
    }
    $('img').src="images/" + number + ".jpg"
}

function play(){
    timer = setInterval(play, 2000);
        if (number == 7) {
            number = 1
        }
        $('img').src="images/" + number + ".jpg"
        number++

}


function next(){
    number++
    if (number == 7) {
        number = 1
    }
    document.querySelector('img').src="images/" + number + ".jpg"
}
function rand(){
    number = getRandomInteger(1, 6);
    document.querySelector('img').src="images/" + number + ".jpg"
}

btn_toggle.on('click', display)
btn_previous.on('click', previous)
btn_play.on('click', play)
btn_stop.on('click', stop)
btn_next.on('click', next)
btn_random.on('click', rand)

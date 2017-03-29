var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];
var btn_toggle = document.querySelector("#toolbar-toggle")
var btn_previous = document.querySelector("#slider-previous")
var btn_play = document.querySelector("#slider-toggle")
var btn_stop = document.querySelector("#slider-stop")
var btn_next = document.querySelector("#slider-next")
var btn_random = document.querySelector("#slider-random")
var number = 1;
var timer

function refresh(n){
    document.querySelector('img').src=slides[number].image
    document.querySelector('figcaption').textContent=slides[number].legend
}
function display(){
    document.querySelector("nav").classList.toggle("hide")
}
function previous(){
    number--
    if (number == -1) {
        number = 5
    }
    refresh()
}

function play(){
    document.querySelector('#slider-toggle').classList.toggle('hide')
    document.querySelector('#slider-stop').classList.toggle('hide')
    timer= setInterval(next, 2000);
}

function stop(){
    document.querySelector('#slider-toggle').classList.toggle('hide')
    document.querySelector('#slider-stop').classList.toggle('hide')
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

btn_toggle.addEventListener('click', display)
btn_previous.addEventListener('click', previous)
btn_play.addEventListener('click', play)
btn_stop.addEventListener('click', stop)
btn_next.addEventListener('click', next)
btn_random.addEventListener('click', rand)

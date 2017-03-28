function extend(e){
    if(document.querySelector('.c-hamburger').classList.contains("is-active") ){
        document.querySelector('.c-hamburger').classList.remove("is-active");
        document.getElementById('menu-panel').classList.remove("show");
    }

    else{
        document.querySelector('.c-hamburger').classList.add("is-active");
        document.getElementById('menu-panel').classList.add("show");
    }
}

document.querySelector('.c-hamburger').addEventListener('click', extend)

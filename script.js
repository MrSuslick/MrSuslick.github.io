function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.button')
button.addEventListener('click', scrollDown)

let shapka = document.querySelector('.nav-item')
shapka.addEventListener('click', scrollDown)

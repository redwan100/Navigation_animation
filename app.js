// const toggle = document.getElementById('toggle')
// const nav = document.getElementById('nav')

// toggle.addEventListener('click', () => nav.classList.toggle('active'))

// TODO: Scroll Effect 
const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.circle')
window.addEventListener('scroll', function (e) {
    const scrollTop = window.scrollY;

    sections.forEach((section, i) => {
        if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
            reset();
            navigation.children[i].classList.add('selected');
        }
    })
})

function reset() {
    for (let i = 0; i < navigation.children.length; i++){
        navigation.children[i].classList.remove('selected');
    }
}





const menuBar = document.querySelector('.humber');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
menuBar.addEventListener('click', function(e){
    if (menuBar) {
        menu.classList.add('active')
    }
    
})

close.addEventListener('click', function(e){
    if (close) {
        menu.classList.remove('active')
    }
    
})

const links = document.querySelectorAll('li a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})




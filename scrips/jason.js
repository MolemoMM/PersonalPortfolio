const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');

};

var typed = new Typed(".input",{
    strings:[
        "Backend Developer.","Mobile Developer."
    ],
    typeSpeed:120,
    backSpeed: 70,
    loop: true

});

 document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            card.querySelector('.more-text').style.display = 'inline';
            button.style.display = 'none';
            card.querySelector('.show-less-btn').style.display = 'inline';
        });
    });

    document.querySelectorAll('.show-less-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.service_card');
            card.querySelector('.more-text').style.display = 'none';
            button.style.display = 'none';
            card.querySelector('.read-more-btn').style.display = 'inline';
        });
    });

/* chatbot */


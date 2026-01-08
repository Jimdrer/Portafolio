document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cartas-nuevas',{delay:500});
ScrollReveal().reveal('.banner-cartas-A',{delay:500});
ScrollReveal().reveal('.banner-cartas-B',{delay:500});
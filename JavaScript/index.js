document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.menu').classList.toggle('show');
    
});

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
   document.body.classList.toggle('dark');
   btnSwitch.classList.toggle('active'); 
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
  
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
   document.body.classList.toggle('dark');
   btnSwitch.classList.toggle('active'); 
});

windows.addEventListener('load',function(){
  new Glider(document.querySelector('cards_list'))
});
new Glider(document.querySelector('.cards'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: true,
  arrows: {
    prev: '.cards-prev',
    next: '.cards-next'
  }
});
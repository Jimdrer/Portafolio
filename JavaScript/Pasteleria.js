let tabBtn = document.querySelectorAll('.tabbtn');
let tabCont = document.querySelectorAll('.cont');

tabBtn.forEach((tabbtn,i) =>{
  tabbtn.addEventListener('click',()=>{
    tabCont.forEach(tabCont=>{
      tabCont.style.display='none';
    });
    tabCont[i].style.display='block';
    tabBtn.forEach(btn=>{
      btn.classList.remove('active');
    })
    tabbtn.classList.add('active');
  })
})

import SimpleParallax from "simple-parallax-js/vanilla";
const image = document.getElementsByClassName('thumbnail');
new SimpleParallax(image);
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);
var image = document.querySelectorAll('.thumbnail');
new SimpleParallax(image, {
    delay: 0,
    orientation: 'down',
    scale: 1.3,
    overflow: true,
    customContainer: '.container',
    customWrapper: '.wrapper'
});
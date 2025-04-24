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

let flour = document.getElementById("flour");
let straw = document.getElementById("straw");
let logo = document.getElementById("logo");
let cup = document.getElementById("cup");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
  var value = window.scrollY;
  
  flour.style.top = value * 0.5 + 'px';
  straw.style.top = -value *.10 + 'px';
  logo.style.left = -value *.5 + 'px';
  cup.style.top = value * .15 + 'px';
  text.style.top = value * 2 + 'px';
})
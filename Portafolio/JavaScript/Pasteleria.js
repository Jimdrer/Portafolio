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

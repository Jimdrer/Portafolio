const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('activ'); 
});

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".cont");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("activ");
    });
    e.target.classList.add("activ");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("activ");
    });
    const element = document.getElementById(id);
    element.classList.add("activ");
  }
});
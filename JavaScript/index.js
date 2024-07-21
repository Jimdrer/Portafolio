// addEventListener('DOMContentLoaded', () => {
//     const menu_btn = document.querySelector('.menu-btn')
//     if (menu_btn){
//         menu_btn.addEventListener('click', () => {
//             const menu_nav = document.querySelector('.nav-menu')
//             menu_nav.classList.toggle('show')
//         })
//     }
// })

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

$(function(){
    $('.c').easyPieChart({
        size:120,
        barColor:"#36e617",
        scaleLength: 0,
        lineWidth: 10,
        trackColor: "",
        lineCap: "circle",
        animate: 2000,
    })
})
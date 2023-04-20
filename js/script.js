let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header = document.querySelector('.header')
let upButton = document.querySelector('.scroll-down')

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.home-text',{delay:200,origin:'top'});
sr.reveal('.home-img',{delay:450,origin:'right'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:500,origin:'right'});
sr.reveal('.lisa-text',{delay:500,origin:'right'});
sr.reveal('.lisa-img',{delay:500,origin:'left'});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
      header.classList.add("active");
      upButton.classList.remove("inactive");
    } else {
      header.classList.remove("active");
      upButton.classList.add("inactive")
    }
  });
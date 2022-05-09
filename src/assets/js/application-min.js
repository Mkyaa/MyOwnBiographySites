// Navbar Burger Navi

// const navSlide=()=>{
//   const burger=document.querySelector('.aside-burger-menu')
//   const nav=document.querySelector('.aside-left')

//   burger.addEventListener('click',()=>{
//     nav.classList.toggle('aside-left-active')
//   })
// }
// navSlide();

// home page selider

// const slides=document.querySelectorAll('.slide')
// const auto=true;
// const intervalTime=5000;
// let slideInterval;

// const nextSlide=()=> {
//     const activeSlider=document.querySelector('.activeslide');
//     activeSlider.classList.remove('activeslide')
//     if(activeSlider.nextElementSibling){
//         activeSlider.nextElementSibling.classList.add('activeslide')
//     }
//     else{
//         slides[0].classList.add('activeslide')
//     }
// }
// const prevSlide=()=> {
//     const activeSlider=document.querySelector('.activeslide');
//     activeSlider.classList.remove('activeslide')
//     if(activeSlider.previousElementSibling){
//         activeSlider.previousElementSibling.classList.add('activeslide')
//     }
//     else{
//         slides[slides.length - 1].classList.add('activeslide')
//     }
// }

// if (auto){
//     slideInterval=setInterval(nextSlide,intervalTime)
// }
// export nextSlide();
// nextSlide();
// prevSlide();

// // education page acordion menu

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
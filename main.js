//var header = document.querySelector('header');

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0); 
});

//function scrollFun(){
//    header.toggleClass('active');
//}
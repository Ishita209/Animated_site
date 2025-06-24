const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation(){
    var elemC= document.querySelector("#elem-container");
var fixed=document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none";
})

var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        
      });
}
function menuAnimation(){
var menu = document.querySelector("nav h3")
var cross = document.querySelector("#full-div1 h4")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")

menu.addEventListener("click", function(){

    full.style.top="0"
navimg.style.opacity="1"
cross.style.display = "block"

// }
// else{
//     full.style.top="-100%"
// navimg.style.opacity="1"
// flag=0
// }
})

cross.addEventListener("click" , function(){
    full.style.top="-100%"
    navimg.style.opacity="1"
    cross.style.display = "none"

    
})



}





function loaderAnimation(){
    var loader= document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4200)
}

swiperAnimation()
page4Animation()
menuAnimation()

loaderAnimation()

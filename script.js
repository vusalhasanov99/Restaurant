let menuIcon=document.querySelector(".menu-icon i");
let navbar=document.querySelector(".navbar-click")
menuIcon.addEventListener("click",function(){
    if(navbar.style.transform!="translateX(0px)"){
navbar.style.transform="translateX(0px)";
    }
    else{
        navbar.style.transform="translateX(200px)";
    }
})
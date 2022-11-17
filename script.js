let menuIcon=document.querySelector(".menu-icon i");
let navbar=document.querySelector(".navbar-click");
let menu=document.querySelector(".menu-icon");

menuIcon.addEventListener("click",function(){
    if(navbar.style.transform!="translateX(-20px)"){
navbar.style.transform="translateX(-20px)";
menu.style.backgroundColor="#383845";
    }
    else{
        navbar.style.transform="translateX(300px)";
menu.style.backgroundColor="transparent";

    }
})
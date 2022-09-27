var menuButton= document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.toggle("menuGaatOpenEnDicht");
}



// var favorietButton= document.querySelector("main section:nth-of-type(3) li button");

// favorietButton.addEventListener("click", hartjeVullen);

// function hartjeVullen () {
//     var hetHartje = document.querySelector("main section:nth-of-type(3) button");
//     hetHartje.classList.toggle("favorietMaken");
// }
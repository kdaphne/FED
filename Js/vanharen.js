var menuButton= document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav= document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.toggle(menuGaatOpenenDicht);
}
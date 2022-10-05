// menu icoon schuift het menu uit door er op te klikken
var menuButton= document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.toggle("menuGaatOpenEnDicht");
}



// lijst met maten schuift uit
var kiesMaat= document.querySelector("main section:nth-of-type(4) button");

kiesMaat.addEventListener("click", lijstMetMaten);


function lijstMetMaten () {
    var alleMaten = document.querySelector("main section:nth-of-type(4) ul");
    alleMaten.classList.add("matenKomen");
}




// bron Russel, snap ik niet
// lijst met maten schuift weer terug
var maatHouden= document.querySelector("main section:nth-of-type(4) ul button");

maatHouden.addEventListener("click", schoenPagina);


function schoenPagina () {
    var overzichtSchoen = document.querySelector("main section:nth-of-type(4) ul");
    overzichtSchoen.classList.remove("matenKomen");
}

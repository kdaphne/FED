var menuButton= document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.toggle("menuGaatOpenEnDicht");
}

// var kiesMaat= document.querySelector("main section:nth-of-type(4) button");

// kiesMaat.addEventListener("click", lijstMetMaten);


// function lijstMetMaten () {
//     alert("hoihoihoi")
//     var alleMaten = document.querySelector("main section:nth-of-type(4) ul");
//     alleMaten.classList.add("matenKomen");
// }




// // bron Russel, snap ik niet
// var maatHouden= document.querySelector("main section:nth-of-type(4) ul button");

// maatHouden.addEventListener("click", schoenPagina);


// function schoenPagina () {
//     console.log("nu moet het weggaan")
//     var overzichtSchoen = document.querySelector("main section:nth-of-type(4) ul");
//     overzichtSchoen.classList.remove("matenKomen");
// }



// var favorietButton= document.querySelector("main section:nth-of-type(3) li button");
// const favoriteBtns = document.querySelectorAll("main section:nth-of-type(3) ul button");

// console.log(favoriteBtns);

// favorietButton.addEventListener("click", hartjeVullen);

// function hartjeVullen () {
//     // var hetHartje = document.querySelector("main section:nth-of-type(3) button");
    
//     img.src = "../images/hartjevol.svg"


//     // hetHartje.classList.add("test");
//     // hetHartje.classList.toggle("favorietMaken");
// }


// var img = document.querySelector("main section:nth-of-type(3) button img");
// var favorietButton= document.querySelector("main section:nth-of-type(3) li button");

// favorietButton.addEventListener("click", hartjeVullen);

// function hartjeVullen () {
//     img.src = "../images/hartjevol.svg"
// }
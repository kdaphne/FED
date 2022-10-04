var menuButton= document.querySelector("header nav:nth-of-type(2) button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen () {
    var deNav = document.querySelector("header nav:nth-of-type(2)");
    deNav.classList.toggle("menuGaatOpenEnDicht");
}



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
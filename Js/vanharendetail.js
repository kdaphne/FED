var kiesMaat= document.querySelector("main section:nth-of-type(4) button");

kiesMaat.addEventListener("click", lijstMetMaten);


function lijstMetMaten () {
    alert("hoihoihoi")
    var alleMaten = document.querySelector("main section:nth-of-type(4) ul");
    alleMaten.classList.add("matenKomen");
}




// bron Russel, snap ik niet
var maatHouden= document.querySelector("main section:nth-of-type(4) ul button");

maatHouden.addEventListener("click", schoenPagina);


function schoenPagina () {
    console.log("nu moet het weggaan")
    var overzichtSchoen = document.querySelector("main section:nth-of-type(4) ul");
    overzichtSchoen.classList.remove("matenKomen");
}

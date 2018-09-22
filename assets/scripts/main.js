//alert("Hola Mundo JS");
//console.log("Hola Mundo JS en Consola");
//DOM (Document object model)

//let element = document.querySelector(".container");
//Los objetos dentro del DOM se conocen como Nodos

let elementlist = document.querySelectorAll(".fa-star");

elementlist.forEach(function(element){
    console.log(element);
    element.addEventListener('click',function(){
       // alert("Estrellita Clickeada");
        element.classList.remove("far");
        element.classList.add("fas");
    })
}); 

//eventos

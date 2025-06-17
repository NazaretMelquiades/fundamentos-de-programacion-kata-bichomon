console.log(document.title);

//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//2. Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = "green";

//3.Imprime por consola la URL de la página
console.log(window.location.href);

//4.Imprime por consola el dominio de la página
console.log(window.location.host);

//5.Imprime todos los nodos de imagen
let todasLasImg = document.querySelectorAll(".img-fixed.img-sprite");
for (let i = 0; i < todasLasImg.length; i++) {
    console.log(todasLasImg[i]);
};

//6.Sustituye el atributo "src" de todas las imágenes
let nuevaSrc = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
    img[i].src = nuevaSrc;
};

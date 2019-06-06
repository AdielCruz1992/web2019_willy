/* Selecionar al parrafo */
var mi_parrafo = document.querySelector("p");

console.log(mi_parrafo);
console.log(mi_parrafo.id);
console.log(mi_parrafo.name);
console.log(mi_parrafo.Content);
console.log(mi_parrafo.Style);
console.log(mi_parrafo.tagName);
console.log(mi_parrafo.textContent);
console.log(mi_parrafo.innerHTML);
console.log(mi_parrafo.style);


// Cambiar valores
mi_parrafo.textContent = "Hola mundo";
mi_parrafo.id = "nuevo";

//Estilo al parrafo
mi_parrafo.style.color ="red";
mi_parrafo.stylo.background ="blue";
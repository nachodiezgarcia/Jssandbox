import "./style.css";

function cambiarFotoPrincipal(x) {
  const fotoPrincipal = document.getElementById("foto-principal");
  const elementoMiniaturaImagen = document.getElementById(x);
  fotoPrincipal.src = elementoMiniaturaImagen.src;
}
const miniatura1= document.getElementById("miniatura1");
const miniatura2= document.getElementById("miniatura2");
const miniatura3= document.getElementById("miniatura3");

miniatura1.addEventListener("click", function () {
  cambiarFotoPrincipal("miniatura1");
});
miniatura2.addEventListener("click", function () {
  cambiarFotoPrincipal("miniatura2");
});
miniatura3.addEventListener("click", function(){
  cambiarFotoPrincipal("miniatura3")
});
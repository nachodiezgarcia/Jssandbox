import "./style.css";

function cambiarFotoPrincipal(x) {
  const fotoPrincipal = document.getElementById("foto-principal");
  const elementoMiniaturaImagen = document.getElementById(x);

  const auxiliar = fotoPrincipal.src;

  fotoPrincipal.src = elementoMiniaturaImagen.src;
  fotoPrincipal.alt = elementoMiniaturaImagen.alt;

  elementoMiniaturaImagen.src = auxiliar;
};



const miniatura1= document.getElementById("miniatura1");
const miniatura2= document.getElementById("miniatura2");
const miniatura3= document.getElementById("miniatura3");
const miniatura4= document.getElementById("miniatura4");

miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));

miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));

miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));

miniatura4.addEventListener ("click",() => cambiarFotoPrincipal("miniatura4"))
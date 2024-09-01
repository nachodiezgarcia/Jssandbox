import "./style.css";

function cambiarFotoPrincipal(LoQuePongoAbajo) {
  const Foto1 = document.getElementById("foto-principal");
  const Miniaturas = document.getElementById(LoQuePongoAbajo);

  const Auxiliar = Foto1.src;
  const Auxiliar2 = Foto1.alt;

  Foto1.src = Miniaturas.src;
  Foto1.alt = Miniaturas.alt;

  Miniaturas.src = Auxiliar;
  Miniaturas.alt = Auxiliar2.alt;
};

const miniatura1= document.getElementById("miniatura1");
const miniatura2= document.getElementById("miniatura2");
const miniatura3= document.getElementById("miniatura3");
const miniatura4= document.getElementById("miniatura4");

miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
miniatura2.addEventListener("click", () => cambiarFotoPrincipal("miniatura2"));
miniatura3.addEventListener("click", () => cambiarFotoPrincipal("miniatura3"));
miniatura4.addEventListener("click", () => cambiarFotoPrincipal("miniatura4"));
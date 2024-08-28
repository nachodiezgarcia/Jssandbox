import "./style.css";

function saludo() {
  const Nombre = document.getElementById("nombre").value;
  const Apellido = document.getElementById("apellido").value;

  const resultados = "Hola mi nombre es " + Nombre + " " + Apellido;

  document.getElementById("resultado").innerHTML = resultados;
}

const botonSumar = document.getElementById("saludar");
botonSumar.addEventListener("click", saludo);

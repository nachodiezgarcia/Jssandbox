import "./style.css";

function saludo() {
  const Nombre = document.getElementById("nombre").value;
  const Apellido = document.getElementById("apellido").value;

  const resultados = `Hola mi nombre es ${Nombre} ${Apellido}`;

  document.getElementById("resultado").innerHTML = resultados;
}

const botonSaludar = document.getElementById("saludar");
botonSaludar.addEventListener("click", saludo);
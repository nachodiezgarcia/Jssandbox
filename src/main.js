import "./style.css";

function sumar() {
  const sumando1 = document.getElementById("sumando1").value;
  const sumando2 = document.getElementById("sumando2").value;

  const resultados = parseInt(sumando1) + parseInt(sumando2);

  document.getElementById("resultado").innerHTML = resultados;
}

const botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", sumar);

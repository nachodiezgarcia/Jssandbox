import "./style.css";

//f(x) = 2x

function doble(x){
    const valor=2
    console.log("Ejecutando doble")
    return x*valor;
};


const eldoblededos= doble(2);

console.log(eldoblededos);

console.log(doble(3));

console.log(doble(4));

function sum(x, y){
    console.log("Ejecutando suma")
    return x + y;
};

console.log(sum(1,2));

console.log("******************************");

//Area de circulo = 2*PI*r**2

function areaCirculo(r){
    console.log("Ejecutando area de circulo")
    return Math.round(2*Math.PI*r**2);
};

console.log(areaCirculo(3))

function areaCuadrado(l){
    console.log("Ejecutando area de circulo")
    return l*l;
};

console.log(areaCuadrado(10));

const resultado = areaCuadrado(4);

console.log(resultado*100)
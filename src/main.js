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
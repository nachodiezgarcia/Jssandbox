import "./style.css";

const alubias = "🫘 Alubias";
const aguacate = "🥑 Aguacate";
const huevo = "🥚 huevo";
const cebolla = "🧅 Cebolla";
const tomate = "🍅 Tomate";
const lechuga = "🥬 Lechuga";

function receta(título, ingredientes, preparación){
    
    const estiloTitulo = "color: red; font-size: 18px; font-style: italic;";
    
    //Título
    console.log(`%c${título}`, estiloTitulo);

    //Ingredientes
    console.log(`Ingredientes: ${ingredientes}`);
    
    //Preparación
    console.log(`Preparación: ${preparación}`)

    console.log("*********************************************************");
}

receta(
    "Ensalada de alubias con aguacate y huevo",
    `${alubias}, ${aguacate}, ${huevo}, ${cebolla}, ${tomate}, ${lechuga}.`,
    "cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre."
);

receta(
    "Ensalada de setas y bacon",
    `setas, bacon, ${lechuga}, ${tomate}, ${cebolla}, queso.`,
    "saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre."
);
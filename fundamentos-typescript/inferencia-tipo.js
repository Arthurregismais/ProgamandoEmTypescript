var quantidade = 20;
// quantidade = 'Sim' - Não compila
var lista = [1, 2, null];
// lista[1] = true; - Não compila
//Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button); // OK
    /* console.log(evento.buton); // Não compila */
};

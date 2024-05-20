let jugador1= true;
let cuadro =document.getElementsByClassName("cuadro");

for (let index = 0; index < cuadro.length; index++) {
    cuadro[index].addEventListener('click', insertar)
}

function insertar(element) {
    let valor= element.target.innerHTML;
    if (!valor.length) {
        element.target.innerHTML= jugador1? 'x': 'o';
        jugador1=!jugador1;

        checkLine(0,1,2);
        checkLine(0,4,8);
        checkLine(0,3,6);
        checkLine(3,4,5);
        checkLine(6,7,8);
        checkLine(1,4,7);
        checkLine(2,5,8);
        checkLine(6,4,2);
    }
}
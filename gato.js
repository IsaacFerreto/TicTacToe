let jugador1 = true;
let cuadro = document.getElementsByClassName("cuadro");
let puntuacion1 = document.getElementById("puntuacion1");
let puntuacion2 = document.getElementById("puntuacion2");
let seguridad = true;
let gateway = 0
let counter = 0;
//this is to get the score from local storage
let J1Puntuacion = JSON.parse(localStorage.getItem('Jugador1'));
let J2Puntuacion = JSON.parse(localStorage.getItem('Jugador2'));

console.log(J2Puntuacion+' puntiacadsf');
console.log(J1Puntuacion+' puntutacion');

if (J2Puntuacion==null&&J1Puntuacion==null) {
  J1Puntuacion=0
  J2Puntuacion=0
}

puntuacion1.innerHTML = parseInt(J1Puntuacion);
puntuacion2.innerHTML = parseInt(J2Puntuacion);



function human() {
    //Function to set player vs player on the squares
    //This is going to take the functions out so we can put a new one
    alert('Set for 2 Players')
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].removeEventListener('click', insertar);
        console.log("Checking Sytem RemoveListener");
    }
    //Adding function to each square 
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].addEventListener('click', Person)
        console.log("Checking Sytem HUMAN");
    }
}
function machine() {
    alert('Set for 1 Player')
    //Function to set player vs machine on the squares
    //This is going to take the functions out so we can put a new one
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].removeEventListener('click', Person);
        console.log("Checking Sytem RemoveListener");
    }
    //Adding function to each square 
    
        for (let index = 0; index < cuadro.length; index++) {
            cuadro[index].addEventListener('click', insertar)
            console.log("Checking Sytem MACHINE");
        }
    

}




function insertar(element) {
    let valor = element.target.innerHTML;
    //We are going to check if the square is empty
    if (!valor.length) {
        element.target.innerHTML = 'X';
        jugador1 = !jugador1;

        //Counter is used to be checking how many moves had been made to estimated a DRAW
        counter = counter + 2
        //FUNCTIONE FOR MACHINE TURN
        //The while was made to avoid the program to loop in case it does not find a free square(At the end of the game)
        while (seguridad) {
            maquina();
            gateway++
            if (gateway > 10) {

                console.log("GATEWAY TEST");
                seguridad = !seguridad
            }
        }

        seguridad = !seguridad
        gateway = 0

        //this are the posible positions in the board
        resultados(0, 1, 2); resultados(0, 4, 8); resultados(0, 3, 6); resultados(3, 4, 5);
        resultados(6, 7, 8); resultados(1, 4, 7); resultados(2, 5, 8); resultados(6, 4, 2);
    }


}

function Person(element) {
    //this function is to be playing player vs player
    let valor = element.target.innerHTML;
    if (!valor.length) {
        //tjis terniary  change betwen player one and two
        element.target.innerHTML = jugador1 ? 'X ' : 'O';
        jugador1 = !jugador1;
        //this counts quantity of moves in case of a tie
        counter++



        //this are the posible positions in the board
        resultados(0, 1, 2); resultados(0, 4, 8); resultados(0, 3, 6); resultados(3, 4, 5);
        resultados(6, 7, 8); resultados(1, 4, 7); resultados(2, 5, 8); resultados(6, 4, 2);
    }


}
//This function is to ckeck diferent results
function resultados(a, b, c) {
   
    console.log(cuadro[a].innerHTML);
    console.log(cuadro[b].innerHTML);
    console.log(cuadro[c].innerHTML);

    if (cuadro[a].innerHTML.length && cuadro[a].innerHTML === cuadro[b].innerHTML && cuadro[b].innerHTML === cuadro[c].innerHTML) {
        console.log('GANE');
        console.log(cuadro[a].innerHTML+'lets check what was sent');
        punctuation(cuadro[a].innerHTML);
        ganador(cuadro[a].innerHTML);


        reiniciar();
    }


   
    //This if is going to be checking if there was a tie
    if (counter >= 9 && cuadro[a].innerHTML != cuadro[b].innerHTML && cuadro[b].innerHTML != cuadro[c].innerHTML) {
        alert("empate")
        counter = 0
        reiniciar();
    }

    console.log(counter);
}


//This function is going to let us know the winner
function ganador(player) {
    counter = 0

    document.getElementById('salida').innerHTML = player + " WIN"
    
 
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].innerHTML = ""
    }
    document.querySelector('.popUp').style.display = 'block';
}

//function to get a random number using max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Funtion so the machine put automatic data on blanck spaces.
function maquina() {
    let pun = getRandomInt(9)
    let valor = cuadro[pun];


    //this "IF" is going to check if the space is null ;
    if (!valor.length && cuadro[pun].innerHTML == '') {
        

        cuadro[pun].innerHTML = "O"
        seguridad = !seguridad
    }

    


}



//function to close Modal
function cerrar() {
    document.querySelector('.popUp').style.display = 'none';
}


//function is going to set all the squares null
function reiniciar() {
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].innerHTML = ""

    }
    counter = 0
}


//this is going to count how many times has someone won

function punctuation(a) {

    console.log('Puntuation functione running');
    console.log(a + 'aqui deberia estar llegando el emoji');
    if (a === 'X') {
        //this is to keep track of the score for O  
        J1Puntuacion++
        puntuacion1.innerHTML = parseInt(J1Puntuacion);
        console.log('jugador X ' + J1Puntuacion);
        localStorage.setItem('Jugador1', JSON.stringify(J1Puntuacion));

    }
    //this is to keep track of the score for O
    if (a === 'O') {
        J2Puntuacion++
        puntuacion2.innerHTML = parseInt(J2Puntuacion);
        console.log('jugador O ' + J2Puntuacion);
        localStorage.setItem('Jugador2', JSON.stringify(J2Puntuacion));
    }
}


//This function is going to delete everything fronm local storage
function restartScore() {

    localStorage.clear();
    location.reload();
    
    console.log(J1Puntuacion+' J1Puntuacion');
    console.log(J2Puntuacion+' J1Puntuacion');

}


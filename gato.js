let jugador1= true;
let cuadro =document.getElementsByClassName("cuadro");
let seguridad=true;
let gateway=0

function human() {
    
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].addEventListener('click', Person)
        console.log("Checking Sytem HUMAN");
    }
}
function machine() {
    
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].addEventListener('click', insertar)
        console.log("Checking Sytem MACHINE");
    }
}
    
function insertar(element) {
    console.log("ejecuta");
    let valor= element.target.innerHTML;
    if (!valor.length) {
        element.target.innerHTML=  '❌';
        jugador1=!jugador1;
        //FUNCTIONE FOR MACHINE TURN
        while (seguridad) {
            maquina();
            gateway++
            if (gateway>10) {
                
                console.log("GATEWAY TEST");
                seguridad=!seguridad
            }
        }
        seguridad=!seguridad
        gateway=0
       
        
        resultados(0,1,2);    resultados(0,4,8);  resultados(0,3,6);  resultados(3,4,5);
        resultados(6,7,8);    resultados(1,4,7);  resultados(2,5,8);  resultados(6,4,2);  
    }


}

function Person(element) {
    let valor= element.target.innerHTML;
    if (!valor.length) {
        element.target.innerHTML=jugador1?  '❌':'⭕';
        jugador1=!jugador1;
        //FUNCTIONE FOR MACHINE TURN
        
       
        
        resultados(0,1,2);    resultados(0,4,8);  resultados(0,3,6);  resultados(3,4,5);
        resultados(6,7,8);    resultados(1,4,7);  resultados(2,5,8);  resultados(6,4,2);  
    }

    
}

function resultados(a,b,c) {
    console.log('GANE?');
    console.log(cuadro[a].innerHTML);
    console.log(cuadro[b].innerHTML);
    console.log(cuadro[c].innerHTML);
    
    if (cuadro[a].innerHTML.length&&cuadro[a].innerHTML===cuadro[b].innerHTML&&cuadro[b].innerHTML===cuadro[c].innerHTML) {
        ganador(cuadro[a].innerHTML);
        console.log('GANE');
    }
       
}

function ganador(player){
    
document.getElementById('salida').innerHTML=player+" WIN"
alert(player+" WON")
alert('game is going to be restarted')
for (let index = 0; index < cuadro.length; index++) {
    cuadro[index].innerHTML=""
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
    let valor= cuadro[pun];
    
    
    //this "IF" is going to check if the space is null ;
    if (!valor.length&&cuadro[pun].innerHTML=='') {
        console.log('if');
        
        cuadro[pun].innerHTML="⭕"
        seguridad=!seguridad
      }
      
    console.log('maquina corriendo');


}

function cerrar(params) {
    document.querySelector('.popUp').style.display = 'none';
}


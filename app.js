let listaNrosSorteados = [];
let nroSecreto;
let intentos = 1;
let nroMaximo = 10;

window.onload = condicionInicio;
console.log(nroSecreto);

function condicionInicio(){
    asignarTextoElemento('h1','Juego del nro secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${nroMaximo}`);
    //Generar el nro aleatorio
    nroSecreto = generarNroSecreto();
    //Inicializar 'intentos'
    intentos = 1;
}


function verificarIntento (){
    let nroUser = parseInt(document.getElementById('nroUser').value);
    
    if (nroUser === nroSecreto){
        asignarTextoElemento ('p',`Acertaste el número en ${intentos}${(intentos ===1)? ' vez':' veces'}`);
        
        //Desabilitacion del btn "Nuevo Juego"
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    
    } else{
        // El user no acertó
        if (nroUser > nroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
        
    }
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*nroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNrosSorteados);
    //Si ya sorteamos todos los nros
    if(listaNrosSorteados.length == nroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los nros posibles');
    }else{
        //Si el nro generado esta incluido en la lista 
        if(listaNrosSorteados.includes(numeroGenerado)){
            return generarNroSecreto();
        }else{ //si no esta incluido, lo agregamos con push y lo retornamos
            listaNrosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function limpiarInput(){
    let valorInput = document.querySelector('#nroUser');
    valorInput.value = '';
}


function reiniciarJuego(){
    //limpiar campo
    limpiarInput();
    //Indicar condiciones de Inicio
    condicionInicio();
    //Deshabilitar el btn
    document.getElementById('reiniciar').setAttribute('disabled','true');
}





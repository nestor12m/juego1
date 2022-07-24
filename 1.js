

let ataqueJugador; 
let ataqueAleatorioEnemigo;
let vidasEnemigo = 3;
let vidasJugador= 3;

function iniciarJuego(){

  const selecionarSeccionAtaque = document.getElementById("Ataque");
   selecionarSeccionAtaque.style.display = "none";

   const selecionarSeccionReiniciar = document.getElementById("reiniciar");
   selecionarSeccionReiniciar.style.display = "none";

    const bntMascotaJugador = document.getElementById("boton_mascota");
    bntMascotaJugador.addEventListener("click",seleccionarMascotaJugador);

    const btnFuego = document.getElementById("boton_fuego");
    btnFuego.addEventListener("click",ataqueFuego);

    const btnTierra = document.getElementById("boton_tierra");
    btnTierra.addEventListener("click",ataqueTierra);

    const btnAgua = document.getElementById("boton_agua");
    btnAgua.addEventListener("click",ataqueAgua);

    const btnReiniciar = document.getElementById("boton_reinciar");
    btnReiniciar.addEventListener("click",reiniciarJuego)

}


function seleccionarMascotaJugador(){
    
    const selecionarSeccionAtaque = document.getElementById("Ataque");
    selecionarSeccionAtaque.style.display = "block";
    const selecionarSeccionMascota = document.getElementById("mascotas");
    selecionarSeccionMascota.style.display = "none";

    const inputhipole = document.getElementById("hipole");
    const inputpesigueya = document.getElementById("pesigueya");
    const inputcaciopea = document.getElementById("caciopea");
    const parrafoerror = document.getElementById("parrafo_error")
    const nombreMascotaJugador = document.getElementById("mascota_jugador")
    

    if(inputhipole.checked ){
       nombreMascotaJugador.innerHTML = "Gato";
    }
    else if(inputpesigueya.checked ){
        nombreMascotaJugador.innerHTML = "Perro";
     }
     else if(inputcaciopea.checked){
        nombreMascotaJugador.innerHTML = "Loro";
     }
     else{
        parrafoerror.innerHTML ="No has seleccionado ninguna opcion. favor elegir una...";
    
        const selecionarSeccionMascota = document.getElementById("mascotas");
        selecionarSeccionMascota.style.display = "block";

        const selecionarSeccionAtaque = document.getElementById("Ataque");
        selecionarSeccionAtaque.style.display = "none";
        
     }

     seleccionarMascotaEnemigo();
}

// funcio sacar numeros aleatorios

function aleatoria(min,max){
    return Math.floor(Math.random() *(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){


    
   let atauqeAleatorio =  aleatoria(1,3);
   const nombreMascotaEnemigo = document.getElementById("mascota_enemigo")

   if(atauqeAleatorio === 1){
    nombreMascotaEnemigo.innerHTML ="Gato";
   }
   else if(atauqeAleatorio ===2){
    nombreMascotaEnemigo.innerHTML ="Perro";
   }
   else {
    nombreMascotaEnemigo.innerHTML ="Loro";
}
}


function ataqueFuego(){
 ataqueJugador = "fuego";// piedra
 ataqueEnemigo();
}
function ataqueAgua(){
    ataqueJugador = "agua"; //papel
    ataqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador = "tierra";//tijera
    ataqueEnemigo();
}


function ataqueEnemigo(){

    let ataqueFinalAleatorio = aleatoria(1,3);

    if(ataqueFinalAleatorio === 1){
        ataqueAleatorioEnemigo ="fuego"
    }
    else  if(ataqueFinalAleatorio === 2){
        ataqueAleatorioEnemigo ="agua"
    }
    else {
        ataqueAleatorioEnemigo ="tierra"
    }

   combate();
}
function combate(){

let spanVidasjugador = document.getElementById("vidas_jugador");
let spanVidasEnemigo =document.getElementById("vidas_enemigo");

    if ( ataqueAleatorioEnemigo === ataqueJugador){
        crearMensaje("EMPATE");
    }
    else if (ataqueJugador === "fuego" && ataqueAleatorioEnemigo === "tierra"){
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML =vidasEnemigo;
        
    }
    else if (ataqueJugador === "agua" && ataqueAleatorioEnemigo === "fuego"){
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML =vidasEnemigo;
        
    }
    else if (ataqueJugador === "tierra" && ataqueAleatorioEnemigo === "agua"){
       
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML =vidasEnemigo;
    }
    else{
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasjugador.innerHTML =vidasJugador;
       
    }

    revisarVidas()
}

function  revisarVidas(){
    if(vidasEnemigo === 0){
        crearMensajeFinal("FELICITACIONES, Ganaste")
    }
    else if(vidasJugador === 0){
        crearMensajeFinal("PERDISTE, Vuelve a intenarlo.....")
    }

}

function crearMensajeFinal(resultadoFinal){

    let seccionMensajes = document.getElementById("mensajes");
      
     let parrafo = document.createElement("p");
     parrafo.innerHTML =` ${resultadoFinal}   `
    
     seccionMensajes.appendChild(parrafo);
     const btnFuego = document.getElementById("boton_fuego");
    btnFuego.disabled = true;

    const btnTierra = document.getElementById("boton_tierra");
    btnTierra.disabled = true;

    const btnAgua = document.getElementById("boton_agua");
    btnAgua.disabled = true;

    const selecionarSeccionReiniciar = document.getElementById("reiniciar");
    selecionarSeccionReiniciar.style.display = "block";
    }

function crearMensaje(resultado){

let seccionMensajes = document.getElementById("mensajes");
  
 let parrafo = document.createElement("p");
 parrafo.innerHTML =`Tu mascota ataco con ${ataqueJugador}, la mascota del enemigo ataco con ${ataqueAleatorioEnemigo}: ${resultado} `

 seccionMensajes.appendChild(parrafo);

}

function reiniciarJuego(){
    location.reload();
}


window.addEventListener("load",iniciarJuego);
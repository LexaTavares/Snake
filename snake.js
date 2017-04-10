var divRojo= document.getElementById("izquierda");


window.onload=function() {document.onkeydown=moverSnake};

      function moverSnake(objeto){

        var tecla = objeto.which;

            var situacionY = divRojo.offsetLeft;
             var situacionX = divRojo.offsetTop;
            switch (tecla){
                case 37 :
                    divRojo.style.left = situacionY-10 +"px" ; break;
                case 38 :
                    divRojo.style.top = situacionX-10 +"px" ;break;
                case 39 :
                    divRojo.style.left = situacionY+10 +"px" ;break;
                case 40 :
                    divRojo.style.top = situacionX+10 +"px" ;break;
            default :alert("Oprima tecla permitida");
            }
      }
  // divRojo.addEventListener("keypress",moverSnake);


// function moverArriba(){
//   divRojo.style.top=divRojo.offsetTop -10;
//
// }
// function moverAbajo(){
//   divRojo.style.top=divRojo.offsetTop +10;
//
// }
// function moverDerecha(){
//   divRojo.style.left=divRojo.offsetLeft -10;
// }
// function moverIzquierda(){
//   divRojo.style.left=divRojo.offsetLeft +10;
// }

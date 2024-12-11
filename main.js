//scroll suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
//Cancela el evemto si este es cancelable
e.preventDefault();
//animate es un metodo de instancia crea una nueva animacion 
$("html, body").animate({
    //Establece el numero de pixeles que el contenido de un elemento 
    scrollTop: $($(this).attr('href')).offset().top
  });
  return false;

    });
});
//Cambiar tamano de tarjeta
function agrandar(a){
   $("#"+a.id).css("width", "95%", "height","800px");
}

function encoger(a){
    $("#"+a.id).css("width", "80%", "height","300px");
 }

 //fin cambiar tamano tarjeta

 //ocultar logo en nav

function ocultarLogo(){
   document.getElementById("img-logo").hidden="true";
}

//Mostrar el dash en el nav
function mostrarDash(){
   document.getElementById('dash').style.display = 'block';
}
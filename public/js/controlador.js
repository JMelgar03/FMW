

//Cambiar tamano de tarjeta
function agrandar(a){
   $("#"+a.id).css("width", "95%", "height","800px");
}

function encoger(a){
    $("#"+a.id).css("width", "80%", "height","300px");
 }

 //fin cambiar tamano tarjeta

 //ocultar logo en nav---------------------------------------------------------------------------------------

function ocultarLogo(){
   document.getElementById("img-logo").hidden="true";
}

//Mostrar el dash en el nav------------------------------------------------------------------------------------
function mostrarDash(){
   document.getElementById('dash').style.display = 'block';
}

//validaciones-----------------------------------------------------------------------------------------------------------------------
var campos = [
   {id:"#txt-nombre-usuario",valido:false },
  {id:"#txt-nombre",valido:false },
  {id:"#txt-apellido",valido:false },
  {id:"#txt-email",valido:false },
  {id:"#txt-password",valido:false },
  {id:"#txt-password-confirm",valido:false}
];

function validarCampo(id){
   
   var prueba;
   var resultado;
   
   if(id == '#txt-email'){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      prueba = re.test($(id).val()); 
      resultado = (($(id).val()!=" ")&&prueba);
   }
   if(id == '#txt-password'|| id == '#txt-password-confirm'){
      resultado = ($(id).val()=='')?false:true;
      
   }

   if(id =='#txt-nombre'||id =='#txt-apellido'||id =='#txt-nombre-usuario'){
      let re = /[a-zA-Z áéíóúÁÉÍÓÚñÑ]/;
      prueba = re.test($(id).val());
      console.log($(id).val());
      console.log(prueba);
      resultado = (($(id).val()!=" ")&&prueba);
   }


   if (resultado){
      $(id).removeClass('is-invalid');
      $(id).addClass('is-valid');
  }else{
      $(id).removeClass('is-valid');
      $(id).addClass('is-invalid');
  }
   
   return resultado;
}

//registro------------------------------------------------------------------------------
function registrarUsuario(){
   for(let i=0;i<campos.length;i++){
      campos[i].valido = validarCampo(campos[i].id);
   }

   for(let i=0;i<campos.length;i++){
      if(!campos[i].valido)
         return;
   }

   registrar();
  
}

function registrar(){
   var parametros = `apellido=${$("#txt-apellido").val()}&nombre=${$("#txt-nombre").val()}&correo=${$("#txt-email").val()}&contrasena=${$("#txt-password").val()}&nombreUsuario=${$("#txt-nombre-usuario").val()}`;

   $.ajax({
    url:'http://localhost:3333/usuarios/registrar',
    data: parametros,
    method:'POST',
    dataType:'json',
    success:(res)=>{
        console.log('Success');
        console.log(res);
        window.location = "escritorio.html";
    },
    error:(error)=>{
        console.error(error);
    }
});
}



//-------------------------------------------sidebar
$("#menu-toggle").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled");
 });

 function mostrarModal(a){
    let image;
    if(a==1){
      image = 'img/FML-sinFondo.png';
    }else{
      image = 'img/multimedia.png';
    }
    $('#modal-body-image').html(`<img src="${image}" class="img-fluid" alt="Responsive image">`)
    $("#exampleModalScrollable").modal('show');

 }
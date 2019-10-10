function login(){
   var parametros = `correo=${$("#inputEmail").val()}&contrasena=${$("#inputPassword").val()}`

   $.ajax({
    url:'http://localhost:3333/usuarios/login',
    data: parametros,
    method:'POST',
    dataType:'json',
    success:(res)=>{
        console.log('Success');
        console.log(res);
        if(res=='1'){
        window.location = "escritorio.html";
        }else{
            console.log('error');
        }

    },
    error:(error)=>{
        console.error(error);
    }
});
}



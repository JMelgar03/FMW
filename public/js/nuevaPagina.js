//editorTexto
$(document).ready(function(){
    $('#txt-content').Editor();
 
    $('#txt-content').Editor('setText', ['<p style="color:red;">CONTENIDO</p>']);
 
    $('#btn-enviar').click(function(e){
       e.preventDefault();
       $('#texto').html($('#txt-content').Editor('getText'));
                   
    });
 });
 
 function modalFunciones(){
    $("#modalFunciones").modal('show');
 }

 function guardarPagina(){
   var parametros = `autor=admin&encabezado=${$('#chk-encabezado').prop('checked')}&activa=${$('#chk-activa').prop('checked')}&url=${$('#txt-url').val()}&paginaPadre=${$('#slc-pagina-padre').val()}&palabrasClaves=${$('#txt-palabras').val()}&descripcion=${$('#txt-descripcion').val()}&titulo=${$("#txt-titulo-pagina").val()}&tituloMenu=${$("#txt-titulo-menu").val()}&contenido=${$('#texto').html($('#txt-content').Editor('getText'))}&publica=${$('#chk-publico').prop('checked')}`

   $.ajax({
      url:'http://localhost:3333/paginas/guardarPagina',
      data: parametros,
      method:'POST',
      dataType:'json',
      success:(res)=>{
          console.log('Success');
          console.log(res);
  
      },
      error:(error)=>{
          console.error(error);
      }
  });
  
 }
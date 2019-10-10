$(document).ready(function(){
    llenarTabla();
});

function llenarTabla(){
    $('#tbl-usuarios').html('');
    $.ajax({
        url:'http://localhost:3333/usuarios/',
        method:'GET',
        dataType:'json',
        success:(res)=>{
            console.log('Success');
            console.log(res);
            for(let i=0;i<res.length;i++)
                $('#tbl-usuarios').html( $('#tbl-usuarios').html() +`<tr>
                <td>${res[i].nombreUsuario}</td>
                <td>${res[i].nombre}</td>
                <td>${res[i].apellido}</td> 
                <td>${res[i].correo}</td>
                <td>${res[i].tipoUsuario}</td>
              <td>
                <button type="button" class="btn btn-light" ><i class="fas fa-eye"></i></button>
                <button type="button" class="btn btn-light" ><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-light" ><i class="fas fa-trash-alt"></i></button>
                </td>
              </tr>` );
        },
        error:(error)=>{
            console.log('Error');
            console.error(error);
        }
    });
}
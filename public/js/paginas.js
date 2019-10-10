$(document).ready(function(){
    llenarTabla();
});

function llenarTabla(){

    $('#tbl-paginas').html('');
    
    $.ajax({
        url:'http://localhost:3333/paginas/',
        method:'GET',
        dataType:'json',
        success:(res)=>{
            console.log('Success');
            console.log(res);
            for(let i=0;i<res.length;i++)
                $('#tbl-paginas').html( $('#tbl-paginas').html() +`  <tr>
                <th scope="row">${i+1}</th>
                <td>${res[i].titulo}</td>
                <td>${res[i].autor}</td>
                <td>${res[i].descripcion}</td> 
                <td>${res[i].contenido}</td>
               
              <td>
                <button type="button" onclick="verPagina('${res[i]._id}')" class="btn btn-light" ><i class="fas fa-eye"></i></button>
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

function verPagina(id){

    $.ajax({
        url:'http://localhost:3333/paginas/:'+id,
        method:'GET',
        dataType:'json',
        success:(res)=>{
            console.log('Success');
            console.log(res);
        },
        error:(error)=>{
            console.log('Error');
            console.error(error);
        }
    });

}
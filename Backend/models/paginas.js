var mongoose = require('mongoose');

//Schema: Define la estructura de los objetos que se guardaran en una coleccion.
var esquema = new mongoose.Schema({
    titulo:String,
    tituloMenu:String,
    contenido:String,
    publica:String,
    descripcion:String,
    palabrasClaves:String,
    paginaPadre:String,
    url:String,
    activa:String,
    encabezado:String,
    autor:String,
    fecha:Date
});

//El primer parametro tiene que ser el nombre de la coleccion en mongo (puede ser el singular)
module.exports = mongoose.model('paginas',esquema);
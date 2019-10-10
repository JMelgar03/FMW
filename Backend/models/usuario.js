var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

//Schema: Define la estructura de los objetos que se guardaran en una coleccion.
var esquema = new mongoose.Schema({
    nombreUsuario:String,
    nombre:String,
    apellido:String,
    correo:String,
    contrasena:String,
    tipoUsuario:Number
});

esquema.pre("save", function(next){
    const usuario = this;
    if(!usuario.isModified('contrasena')){
        return next();
    }

   bcrypt.genSalt(10,(err,salt)=>{
      if(err){
          next(err);
      } 
      bcrypt.hash(usuario.contrasena,salt,null,(err,hash)=>{
        if(err){
            next(err);
        }
        usuario.contrasena = hash;
        next();
      })
   }) 
})

esquema.methods.compararContrasena = function(contrasena,cb){
    bcrypt.compare(contrasena, this.contrasena, (err,iguales) => {
      if(err){
          return cb(err);
          cb(null,iguales);
      } 
    })
}


module.exports = mongoose.model('usuarios',esquema);
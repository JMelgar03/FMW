const passport = require('passport');
const LocalStrategy = require('passport-local');
const Usuario = require('../models/usuario');

passport.serializeUser((usuario,done)=>{
    done(null,usuario.id);
})

passport.deserializeUser((id,done)=>{
    Usuario.findById(id,(err,usuario)=>{
        done(err,usuario);
    })
})

passport.use(new LocalStrategy(
    {usernameField:'correo'},
    (correo,contrasena,done)=>{
       Usuario.findOne({correo}, (err,usuario)=>{
        if(!usuario){
            return done(null,false,{message:`el correo ${correo} no existe.`})
        }else{
            usuario.compararContrasena(contrasena,(err,iguales)=>{
                if(iguales){
                    return done(null,usuario);
                }else{
                    done(null,false,{message:'la contrasena no es valida.'})
                }
            })
        }
        

       }) 
    }
))

exports.estaAutenticado = (req, res, next) => {
    if(req.isAuthenticated()){
      return next();  
    }
    res.status(401).send('tienes que loguearte');
}

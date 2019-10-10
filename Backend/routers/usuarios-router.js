var express = require('express');
var session = require('express-session');
var passport = require('passport');
var passportConfig = require('../config/passport');
var usuario = require('../models/usuario');
var router = express.Router();


router.use(session({
    secret: 'secreto',
    resave:true,
    saveUninitialized:true
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/registrar',function(req,res,next){
    const u = new usuario({
        nombreUsuario:req.body.nombreUsuario,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo:req.body.correo,
        contrasena:req.body.contrasena,
        tipoUsuario:req.body.tipoUsuario
    });
    
    usuario.findOne({correo:req.body.correo},(err,usuarioExistente)=>{
        if(usuarioExistente){
        return res.status(400).send('ese correo ya existe');
        }
        u.save()
        .then((data)=>{
            req.logIn(u, (err)=>{
               if(err){
                   next(err);
               } 
               res.send('Guardado');
            })
        res.send('Guardado'+data);
        res.end();
        })
        .catch((error)=>{
       res.send('no se guardo.'+error);
       res.end();
        });
    })
        
    })

    

router.get('/',function(req,res){
    usuario.find()
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});



router.post('/login',function(req,res,next){
    passport.authenticate('local',(err,usuario,info)=>{
        if(err){
            next(err);
        }
        if(!usuario){
            return res.send('Datos incorrectos');
        }
        req.logIn(usuario, (err)=>{
            if(err){
                next(err);
            } 
            res.send('1');
         })
    })(req,res,next);

});

router.get('/cerrarSesion',(req,res)=>{
if(passportConfig.estaAutenticado){
req.logOut();
res.send('cerro sesion');
}
})

router.get('/usuarioLogueado',(req,res)=>{
   res.json(req.user);
    })


module.exports = router;
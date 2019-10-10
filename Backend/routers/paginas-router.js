var express = require('express');
var pagina = require('../models/paginas');
var router = express.Router();

router.get('/',function(req,res){
    pagina.find()
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});

router.get('/:id',function(req,res){
    pagina.find({_id:req.params.id},{contenido:true})
    .then((data)=>{
        res.send(data.contenido);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});


router.post('/guardarPagina',function(req,res){
    let now= new Date();
    var nuevapagina =new pagina(
    {titulo:req.body.titulo,
    tituloMenu:req.body.tituloMenu,
    contenido:req.body.contenido,
    publica:req.body.publica,
    descripcion:req.body.descripcion,
    palabrasClaves:req.body.palabrasClaves,
    paginaPadre:req.body.paginaPadre,
    url:req.body.url,
    activa:req.body.activa,
    encabezado:req.body.encabezado,
    autor:req.body.autor,
    fecha: now
    })
    nuevapagina.save()
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});


module.exports = router;
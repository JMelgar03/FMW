var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
var usuariosRouter = require('./routers/usuarios-router');
var paginasRouter = require('./routers/paginas-router');
var database = require('./modules/database');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/usuarios',usuariosRouter);
app.use('/paginas',paginasRouter);

app.get('/',(req,res)=>{
    res.send('<h3>Backend Funcionando</h3>')
})

app.listen(3333, function(){
    console.log("Servidor levantado");
});



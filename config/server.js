const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

//Setting 

//Darle el puerto que utilizará la app
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


//MiddleWare

//No se usaran imagenes, archivos pesados
app.use(bodyParser.urlencoded({extended:false}));


module.exports = app;
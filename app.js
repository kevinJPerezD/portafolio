'use strict'
// Guardar configuración de express y peticiones
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas
var project_routes = require('./routes/project');

// middlewares
// Linea necesario body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// Trabajar con json
app.use(bodyParser.json());

// Configurar cabeceras y cors
// en el asterisco 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', project_routes);

// exportar
module.exports = app;
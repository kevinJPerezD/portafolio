'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://portafolio:portafolio@cluster0.cyugu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log('Conexion a la base de datos satisfactoriamente con exito');

        // Creacion del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la url localhost 3700');
        });

    })
    .catch(err => console.log(err));
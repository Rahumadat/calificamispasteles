

module.exports = function (app) {

    const express = require('express');
//************************************** */
    //devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const controller = require('../controller/controller')
    


    app.get('/buscaTodos', function (req, res) {
        controller.buscaTodos(req,res);
    });

    app.get('/buscarUno/:id', function (req, res) {
        controller.buscarUno(req,res);
    });

    app.post('/nuevo', function (req, res) {
        controller.nuevo(req,res);
    });

    app.post('/ingresarComentario/:id', function (req, res) {
        controller.ingresarComentario(req,res);
    });

}
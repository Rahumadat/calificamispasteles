const { request } = require('http');


const {Pastel} = require('../model/modelopasteles');

module.exports = {
    buscaTodos: async function (req, res) {
        console.log("paso por TODOS");
        
        const datas = await Pastel.find().sort('-_id');
        //console.log(datas);
        res.json(datas);
        
    },

    buscarUno: async function (req, res) {
        const id = req.params.id
        console.log("paso por uno");
        const datas = await Pastel.findOne({_id: id});
        console.log(datas);
        res.json(datas);
        
    },

    nuevo: async function (req, res) {
 
        const body = req.body;
        const user = new Pastel(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    ingresarComentario: async function (req,res) {
        const id = req.params.id
        const {puntuacion, comentario} = req.body
        const data = await Pastel.findOneAndUpdate({_id: id}, {$push: {comentarioPastel: {puntuacion, comentario}}}) 
        .then( data => res.json(data))
        .catch(err => res.json(err));

    }

}
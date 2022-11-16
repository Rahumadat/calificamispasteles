const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/PastelDB', {useNewUrlParser: true})

const ComentarioPastelSchema = new mongoose.Schema({
    puntuacion: {type: String},
    comentario: {type: String},

})

const PastelSchema = new mongoose.Schema({
    nombrePastelero: {type: String},
    fotoPastelUrl: {type: String},
    comentarioPastel: [ComentarioPastelSchema]
})

const Pastel = mongoose.model('pastel', PastelSchema)

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Comentario = mongoose.model('comentarioPastel', ComentarioPastelSchema);

module.exports = {Pastel, Comentario};
const db = require('./../classes/database');

let peliculaSchema = new db.Schema({
	Titulo: String,
	Duracion: String,
	Director: String,	
});

peliculaSchema.methods.BuscarPelicula = function () {

return 'Lista de peliculas';
}

var pelicula = db.model('pelicula', peliculaSchema);

module.exports = pelicula;

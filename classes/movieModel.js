const db = require('./../classes/database');

let peliculaSchema = new db.Schema({
	Titulo: String,
	Duracion: String,
	Director: String,	
});

peliculaSchema.methods.BuscarPelicula =  function (model) {

var texto =	  model.find(function (err, peliculas) {
		if (err) return console.error(err);
	

		return peliculas[0].Titulo;
	  })

return texto;
}

var pelicula = db.model('pelicula', peliculaSchema);

module.exports = pelicula;

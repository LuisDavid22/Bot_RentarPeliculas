const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesBotDB', { useNewUrlParser: true }, (err, res) => {
	if (err) throw err;
});

module.exports = mongoose;
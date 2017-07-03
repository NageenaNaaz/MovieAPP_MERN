var mongoose = require('mongoose');
// define the movieSchema model schema
var movieSchema = mongoose.Schema;
const movie = new movieSchema({
	Id: String,
  	Title: String,
  	Year: String,
  	imdbID: String,
  	Type: String,
  	Poster: String,
  	imdbRating: String
});

module.exports = mongoose.model('movie', movie);

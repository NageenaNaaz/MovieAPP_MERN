//var express = require('express');
//var router = express.Router();

const express = require('express');

const router = new express.Router();

var movie = require('../models/movie.js');

/* GET users listing. */
router.post('/add', function(req, res) {
  if (req.body) {
    var info = new movie();
    info.Id = req.body.id;
    info.Title = req.body.title;
    // info.Year = req.body.Year;
    info.imdbID = req.body.imdb_id;
    info.Type = req.body.genres;
    info.Poster = req.body.poster_path;
    info.imdbRating = req.body.vote_average
    console.log(info);

    info.save(function(error) {
      if (error) {
        console.log("error", error);
      } else {
        res.send("Inserted");
      }
    })
  }
});

router.get('/view', function(req, res) {
  movie.find({}, function(err, info) {
    if (err) {
      res.send(err);
    } else {
      res.send(info);
    }

  });
})
router.delete('/delete', function(req, res) {
  var movieId = req.body.id;
  console.log(movieId)
  movie.remove({
    _id: movieId
  }, function(err) {
    if (err) {
      res.send(err);
    }
    res.status(200).json({
      message: "Movie Deleted Successfully."
    });
  });

});

// router.put("/update",function(req,res) {
//     if(req.body)
//     {
//     movie.update({"title":req.body.title},{$set:{"title":req.body.title}},function(err){
//         if(err) {
//           res.send(err);
//         }
//         else  {
//         res.send("movie updated");
//         }
//       });
//     }
//   });



module.exports = router;

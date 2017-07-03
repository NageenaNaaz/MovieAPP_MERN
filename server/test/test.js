var should = require("chai").should(),
  //expect = require("chai").expect,
  //assert = require("chai").assert,
  supertest = require("supertest");
var index = require("../../index.js");
var url = supertest("http://localhost:8081");



describe("Testing the First route", function(err) {
  it("Posting the movie", function(done) {
    url
      .post("/movie/add")
      .expect(200)
      .send({
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ4ZjZlM2MtNWU4Ny00YjQ3LTk0YmMtNTQzOGM1NGVlNWI5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_SX300.jpg",
        "Type": "movie",
        "imdbID": "tt3203910",
        "Year": "2013",
      })
      .end(function(err, res) {
        should.not.exist(err);
        res.text.should.equal("Inserted");
        done();
      });
  });
});


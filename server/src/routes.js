module.exports = (DB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
    /**** Routes ****/
  router.get('/movies', async (req, res) => {
    const movies = await DB.getMovies(); 
    res.json(movies);
  });

  router.get('/movies:id', async (req, res) => {
    const movie = await DB.getMovie(req.params.id);
    res.json(movie);
  });

  router.post('/movies', async (req, res) => {
    // TODO: Implement!
    const title = req.body.title;
    const description = req.body.description;
    const genre = req.body.genre;
    const release = req.body.release;
    DB.createMovie(title, description, genre, release)
    res.json({msg: title + ' has been added'});
  });

  router.post('/reviews', async (req, res) => {
    // TODO: Implement!
    
    const answer = req.body.answer;
    const score = req.body.score;
    const id = req.body.id;
    await DB.createReview(answer,score, id)
    res.json({msg: answer + ' has been added'});
  });
  

  return router;
}

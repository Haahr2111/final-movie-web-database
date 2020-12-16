module.exports = (mongoose) => {

  const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    release: String,
    reviews: [{
      answer: String,
      score: String
    }]
  });
  const movieModel = mongoose.model('movie', movieSchema);
  async function getMovies() {
    try {
      return await movieModel.find();
    } catch (error) {
      console.error("getMovie:", error.message);
      return {};
    }
  }

  async function getMovie(id) {
    try {
      return await movieModel.findById(id);
    } catch (error) {
      console.error("getMovie:", error.message);
      return {};
    }
  }
  async function createMovie(title, description, genre, release) {
    let movie = new movieModel({
      title: title,
      description: description,
      genre:genre,
      release: release
    });
    return movie.save();
  }
  async function createReview(answer, score, id) {

    let NewReview = {
      answer: answer,
      score: score
    };
    return await movieModel.findOneAndUpdate(
      { _id: id },
      { $push: { reviews: NewReview } }
    );
  }
  async function bootstrap(count = 5) {
    let l = (await getMovies()).length;
    console.log("Movie collection size:", l);

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

 const getTitle =['Star Wars', 'TinTin', 'Bjergkøbing Grandpix', 'Indiana Jones', 'Django', 'Lord of the rings']
    const testReviews =['Great Adventure', 'Very nice',
      'Tintin always makes me hi hi', 'thats cool',
      'Funny ride', 'could be better',
      'That rip never gets old', 'The old ones are way better',
      'Too much blood', 'not enough blood',
      'The guy that plays frodo looks like a girl', 'Great movie'
    ]

function testRate() { 
  return ['','1','2','3','4','5','6','7','8','9','10'][getRandomInt(1, 10)];
  
  }
    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newMovie = new movieModel
        (
          {
        title: getTitle[i],
        description:`Movie desc number ${i}`,
        genre:`Movie genre number ${i}`,
        release: `Movie release number ${i}`,
        reviews: [{
          answer: testReviews[i],
          score: testRate() 
        }]
      }
         )
         

        promises.push(newMovie.save());
      }
      return Promise.all(promises);
    }
  }


  return {
    getMovies,
    getMovie,
    createMovie,
    createReview,
    bootstrap
  }

}
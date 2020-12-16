import React from "react";
import {Link, useParams} from "@reach/router";
import AddReview from "./AddReview";

function Movie(props) {

    const params = useParams()
    const id = params.id;
    const movie = props.getMovie(id);


    if (movie===undefined) return null 

    
    const reviewList= movie.reviews.map(e=> 
        {return (
        <>
        <li key={e._id}><p>{e.answer}</p>
        <p>Rating: {e.score}</p>
        </li>
        </>
        )
    })

   console.log(movie)

    return (
<>
<h3>{movie.title}</h3>
    
    <p><b>Release:</b> {movie.release}</p>
<p><b>Genre: </b>{movie.genre}</p>
      <p><b>Description </b><br></br>{movie.description}</p>
    
     <AddReview id={id} addReview={props.addReview}></AddReview>

     <p><b>Reviews</b></p>
     <ul>{reviewList}</ul>
      <Link to="/">Back</Link>
</>
    )
}

export default Movie
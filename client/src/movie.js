import React from "react";
import {Link, useParams} from "@reach/router";
import AddReview from "./AddReview";
import AuthService from "./AuthService";

const API_URL = process.env.REACT_APP_API;
const authService = new AuthService(`${API_URL}/users/authenticate`);


function Movie(props) {

    const params = useParams()
    const id = params.id;
    const movie = props.getMovie(id);
    
    if (movie===undefined) return null 

    const rateToint = movie.reviews.map(e=>{
        const int = parseInt(e.score)
        return int
    })
    
    const getAverageRate=rateToint.reduce((a,b)=>(a+b))/rateToint.length;


    const reviewList= movie.reviews.map(e=> 

        {
            if (e.answer!='')
            return (
        <>
        
        <li key={e._id}><p>{e.answer}</p>
        <p>Rating: {e.score}</p>
        </li>
        </>
        )
    })
    //last added first
reviewList.sort();
reviewList.reverse();

   console.log(movie)
   let loginAddreview = ""
   if (authService.loggedIn()) {
   loginAddreview = <AddReview id={id} addReview={props.addReview}></AddReview>
  } 
    return (
<>
<h3>{movie.title}</h3>
    
    <p><b>Release:</b> {movie.release}</p>
<p><b>Genre: </b>{movie.genre}</p>
<p><b>Average Rating:</b> {getAverageRate}</p>
      <p><b>Description </b><br></br>{movie.description}</p>
    
     {loginAddreview}

     <p><b>Reviews</b></p>
     <ul>{reviewList}</ul>
      <Link to="/">Back</Link>
</>
    )
}

export default Movie
import React from 'react';
import {Link} from "@reach/router";
import AuthService from "./AuthService";
import AddMovie from "./AddMovie";

const API_URL = process.env.REACT_APP_API;
const authService = new AuthService(`${API_URL}/users/authenticate`);

function Movies(props){
  
const movieData = props.movieData;

    const mapFunction = element => {
     
        return(
    <Link to={`/movie/${element._id}`} key={element._id}>
      <li>{element.title}</li>
    </Link>
    )
  
}

  const list = movieData.map(mapFunction);
  
  let loginAddmovie = "";
  if (authService.loggedIn()) {
  loginAddmovie = <AddMovie addMovie={props.addMovie}></AddMovie>
  }
  
    return(
        <>
        <h3>Movies</h3>
      <ul>
        {list}
      </ul>
        {loginAddmovie}
       
        </>
    )
}

export default Movies;



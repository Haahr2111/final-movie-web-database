import React from 'react';
import {Link} from "@reach/router";

import AddMovie from "./AddMovie";

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
  

  
    return(
        <>
        <h3>Movies</h3>
      <ul>
        {list}
      </ul>
        <AddMovie addMovie={props.addMovie}></AddMovie>
        
        </>
    )
}

export default Movies;



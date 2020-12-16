import React, {useState} from "react";

function AddMovie(props) {
	const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [release, setRelease] = useState('')



	return (
		<>
		<h3>Add Movie</h3>
			<form>
				<label htmlFor="form_name"> set Title</label>
				<input onChange={event => setTitle(event.target.value)} type="text" id="form_name" name="form_name"/>
				<label htmlFor="form_description"> set description</label>
				<input onChange={event => setDescription(event.target.value)} type="text" id="form_description" name="form_description"/>
                <label htmlFor="form_genre">set genre</label>
                <input onChange={event => setGenre(event.target.value)} type="text" id="form_genre" name="form_genre"/>
                <label htmlFor="form_release"> set release date</label>
                <input onChange={event => setRelease(event.target.value)} type="text" id="form_released" name="form_released"/>
				<button type="button" onClick={(event) => props.addMovie(title, description, genre, release)}>
					Submit
				</button>
			</form>
		</>
	);
}

export default AddMovie;
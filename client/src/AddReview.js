import React, {useState} from "react";

function AddReview(props) {
    const [answer, setAnswer] = useState('')
    const [score, setScore] = useState('')

	



	return (
		<>
		<h3>Add an review</h3>
			<form>
				<label htmlFor="form_answer">Write review</label>
				<input onChange={event => setAnswer(event.target.value)} type="text" id="form_answer" name="form_answer"/>
                <label htmlFor="form_score">Rate:</label>
<select onChange={event => setScore(event.target.value)} id="form_score" name="form_score">
<option value="">Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
				<button type="button" onClick={(event) => props.addReview(props.id, answer, score)}>
					Submit
				</button>
			</form>
		</>
	);
}

export default AddReview;

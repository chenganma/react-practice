import React from 'react';

//not showing empty question
//<h3 style={{display: props.question ? "block" : "none"}}></h3>

function Joke(props){
	return(
      <div>

		<h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
		<h3 style={{color: ! props.question && "#888"}}>Answer: {props.punchLine}</h3>
		<hr/>
	  </div>


		)
}

export default Joke
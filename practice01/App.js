import React from "react"
import ReactDOM from "react-dom"

function MyAPP(){
	return (
	  <div>
	    <h1>James</h1>
	    <p>i write code</p>
	    <ul>
	      <li>test1</li>
	      <li>test2</li>
	      <li>test3</li>
	    </ul>
	  </div>
	)
}


ReactDOM.render(<MyAPP />, document.getElementByID('id'))
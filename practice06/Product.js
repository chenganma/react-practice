import React from 'react';

function Product(props){
	return(
      <div>
		<h2>{props.product.name}</h2>
		<p>${props.product.price}.00  -  {props.product.description}</p>
		<hr/>
	  </div>
	)
}

export default Product
import React from 'react';

const divStyle = {
  fontSize: '15px',
  width: '450px',
  textAlign: 'center'
};

const h2Style = {
  fontSize: '15px',
  textAlign: 'left'
};

function Product(props){
	return(
      <div style={divStyle}>
		<h2 style={h2Style}>{props.product.name}</h2>
		<img src="https://placekitten.com/350/350" />
		<p>{props.product.price}  {props.product.description}</p>
		
	  </div>
	)
}

export default Product
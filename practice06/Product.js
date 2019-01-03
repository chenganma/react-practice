import React from 'react';

const divStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

function Product(props){
	return(
      <div style={divStyle}>
		<h2>{props.product.name}</h2>
		<img src="https://*****/imagedemo/demo01.png" />
		<p>{props.product.price}  {props.product.description}</p>
		
	  </div>
	)
}

export default Product
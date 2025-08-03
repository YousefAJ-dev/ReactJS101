// onChange =	event handler used primarily with form elements
// 				ex. <input> <textarea> <select> <radio> 
//				Triggers a function everytime the value of the input changes

import React, {useState} from "react";

function MyComponent(params) {
	
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [comment, setComment] = useState("");
	const [payment, setPayment] = useState("");
	const [shipping, setShipping] = useState("Delivery");

	function handleNameChange(e){
		setName(e.target.value);
	}

	function handleQuantityChange(e){
		setQuantity(e.target.value);
	}

	function handleCommentChange(e){
		setComment(e.target.value);
	}

	function handlePaymentChange(e){
		setPayment(e.target.value);
	}

	function handleShippingChange(e){
		setShipping(e.target.value);
	}

	return(
		<div>
			<h1>Name: {name}</h1>
			<input id="name" type="text" value={name} onChange={handleNameChange} placeholder="name"/>
			<h1>Quantity: {quantity}</h1>
			<input type="number" value={quantity} onChange={handleQuantityChange} placeholder="amount"/>
			<p>Comment: {comment}</p>
			<textarea value={comment} onChange={handleCommentChange} placeholder="Extra Delivery Instruction, etc"></textarea>
			<br />
			<p>Payment Method</p>
			<select value={payment} onChange={handlePaymentChange}>
				<option value="" disabled>Select an Option:</option>
				<option value="Mastercard">Mastercard</option>
				<option value="Paypal">Paypal</option>
				<option value="Giftcard">Giftcard</option>
				<option value="Afterpay">Afterpay</option>
			</select><br /><br />
			<h4>Shipping: {shipping}</h4>
			<label>
				<input type="radio" value={"Pick Up"}
					checked={shipping === "Pick Up"}
					onChange={handleShippingChange}/>
				Pick Up
			</label><br />
			<label>
				<input type="radio" value={"Delivery"}
					checked={shipping === "Delivery"}
					onChange={handleShippingChange}/>
				Delivery
			</label>
		</div>
	);
	
}

export default MyComponent;
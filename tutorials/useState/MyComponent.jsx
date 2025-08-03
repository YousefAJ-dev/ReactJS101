// React hook =	Special function that allows functional components 
// 				to use React features without writing class components (React v16.8)
//				(useState, useEffect, useContext, useReducer, useCallback, and more...)

// UseState() =	A React hook that allows for the creation of a stateful variable 
// 				AND a setter function to update its value in the Virtual DOM.
//				[name, setterName]

import React, {useState} from "react";

function MyComponent(params) {

	const [name, setName] = useState("Guest"); // returns [varName, setterName]
	const [age, setAge] = useState(0);
	const [isEmployed, setIsEmployed] = useState(false);

	const updateName = () => {
		setName("Bro");
		console.log({name});
	};

	const incrementAge = () => {
		setAge(age+1);
	};

	const decrementAge = () => {
		if (age > 0) {
			setAge(age-1);
		}
	};

	const toggleEmployment = () => {
		//isEmployed ? setIsEmployed(false) : setIsEmployed(true);
		setIsEmployed(!isEmployed);
	} 


	return(
		<div>
			<p>Name: {name}</p>
			<button onClick={updateName}>Set Name</button>

			<p>Age: {age}</p>
			<button onClick={incrementAge} style={{padding: "0px 40px", color: "black", fontSize: "1.5em"}}>+</button>
			<button onClick={decrementAge} style={{padding: "0px 40px", color: "black", fontSize: "1.5em"}}>-</button>

			<p>Is {name} employed? {isEmployed ? "Yes" : "No"}</p>
			<button onClick={toggleEmployment} style={{padding: "5px 40px", color: "black"}} >Toggle Employment</button>

		</div>
	);
	
	
}

export default MyComponent;
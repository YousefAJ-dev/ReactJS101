// useState() =	Re-renders the component when the state value changes.

/* useRef() = 	"use reference" Does not cause re-renders when its value
 *				changes.
 *				When you want a component to "remember" some information,
 *				but you don't want that information to trigger new renders.
 *				
 *				1. Accessing/Interacting with DOM elements
 *				2. Handling Focus, Animations, and Transitions
 *				3. Managing Timers and Intervals
 */

import React, { useRef, useState, useEffect } from "react";

function MyComponent() {

	//let [number, setNumber] = useState(0);
	const ref = useRef(0); // returns an object with one propery -> current

	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);
	const inputRef3 = useRef(null);

	console.log(ref);


	useEffect(() => {
		console.log("Component Rendered!");
		console.log(inputRef1);
		console.log(inputRef2);
		console.log(inputRef3);

	});

	function handleClick() {

		//setNumber(n => n + 1);

		ref.current++;
		console.log(ref.current);

		return ref.current;

	}

	function handleClick1() {

		inputRef1.current.focus(); // inputRef object focuses
		inputRef1.current.style.backgroundColor = "green";
		inputRef2.current.style.backgroundColor = "#ffff0049";
		inputRef3.current.style.backgroundColor = "#ff6b6b49";

	}

	function handleClick2() {

		inputRef2.current.focus(); // inputRef object focuses
		inputRef1.current.style.backgroundColor = "#5ec26641";
		inputRef2.current.style.backgroundColor = "yellow";
		inputRef3.current.style.backgroundColor = "#ff6b6b49";

	}

	function handleClick3() {

		inputRef3.current.focus(); // inputRef object focuses
		inputRef1.current.style.backgroundColor = "#5ec26641";
		inputRef2.current.style.backgroundColor = "#ffff0049";
		inputRef3.current.style.backgroundColor = "red";

	}

	return (
		<div>
			<button onClick={handleClick1}>Go!</button>
			<input ref={inputRef1} />
			<button onClick={handleClick2}>Yield!</button>
			<input ref={inputRef2} />
			<button onClick={handleClick3}>Stop!</button>
			<input ref={inputRef3} />
		</div>
	);
}

// Observation: ref.current value is incrementing
//				however the updated values aren't
// 				causing a re-render therefore not 
// 				being shown in the page. 

// 				But still tracked as seen in console

//				Once re-rendered via change on DOM, 
// 				current updated value is shown

export default MyComponent;
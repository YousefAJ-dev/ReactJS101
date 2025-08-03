// useEffect()=	React Hook that tells React- DO SOME CODE WHEN (pick one)
//				This component re-renders
//				This component mounts
//				The state of a value	

// useEffect(function, [dependencies])

// 1. useEffect(() => {})			// Runs after every re-render
// 2. useEffect(() => {}, [])		// Runs only on mount
// 3. useEffect(() => {}, [value])	// Runs on mount + when value changes

/* USES
 * #1 Event Listeners
 * #2 DOM Manipulation
 * #3 Subscriptions (real-time updates)
 * #4 Fetching Data from an API
 * #5 Clean ip when a component unmounts
 */

// mount =	 when you add a component to the DOM
// unmount = When you remove a component from the DOM

/* ------------------------ EXAMPLE 1 ---------------------------- */ 

import React, { useState, useEffect } from 'react';

function MyComponent2() {

	const [count, setCount] = useState(0);
	const [color, setColor] = useState("#FFFFFF")

	useEffect(() => { document.title = `Count: ${count} ${color}`}, [count]); // color doesnt update unless count updates
	
	//useEffect(() => { document.title = `Count: ${count} ${color}`}, [count, color]); // updates on color or count update

	useEffect(() => { document.title = 'My Counter Program' }, []);

	function addCount() {
		setCount(c => c + 1);
	}

	function subtractCount() {
		setCount(c => c - 1);
	}

	function handleColorChange(e) {
		setColor(e.target.value);
	}

	return (
		<div>
			<h1 id='header'>My Counter Program</h1>
			<p>Count: {count}</p>
			<button onClick={addCount}>+</button>
			<button onClick={subtractCount}>-</button>

			<h3>Color</h3>
			<input type="color" value={color} onChange={handleColorChange}/><br /><br />
			<div id='colorBlock' style={{border: "2px solid white", backgroundColor: color}}>
				Selected Color: {color}
			</div>
		</div>
	);

}

export default MyComponent2;

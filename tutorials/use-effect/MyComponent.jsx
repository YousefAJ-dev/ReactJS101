import React, { useState, useEffect } from 'react';

/* ------------------------ EXAMPLE 1 ---------------------------- */

function MyComponent() {

	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	//window.addEventListener( "resize", handleResize ); // CONSTANTLY adds multiple event listeners
	// vonsole.log("EVENT LISTENER ADDED")

	// adds event listener when resizing then based on width, height then remove it when finished
	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => { // once we finish with event listener remove it so we free up CPU
			window.removeEventListener("resize", handleResize);
		};
	}, [width, height]);

	function handleResize() {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}

	return (
		<div>
			<p>Window width: {width}px</p>
			<p>Window height: {height}px</p>
		</div>
	);

}

export default MyComponent;

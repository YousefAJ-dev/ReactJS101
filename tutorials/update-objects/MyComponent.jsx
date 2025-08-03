import React, { useState } from 'react';

function MyComponent() {

	// Initialize the car state as an object with year, make, and model
	const [car, setCar] = useState({
		year: 2005,
		make: "Ford",
		model: "Mustang"
	});

	// Update only the 'year' property while preserving the rest of the car object
	function handleYearChange(e) {
		// Use the spread operator (...) to copy the existing car properties {year: 2005, make: "Ford", model: "Mustang"}
		// Then overwrite just the year with the new input value
		setCar({ ...car, year: e.target.value });
	}

	// Update only the 'make' property
	function handleMakeChange(e) {

		setCar(c => ({ ...c, make: e.target.value })); // We can improve this by using an updater function

	}

	// Update only the 'model' property
	function handleModelChange(e) {
		setCar(c => ({ ...c, model: e.target.value }));
	}

	return (
		<div>
			<p>Your favorite car is a {car.year} {car.make} {car.model}</p>

			<label>Year: </label>
			<input type="number" value={car.year} onChange={handleYearChange} /><br />

			<label>Make: </label>
			<input type="text" value={car.make} onChange={handleMakeChange} /><br />

			<label>Model: </label>
			<input type="text" value={car.model} onChange={handleModelChange} /><br />
		</div>
	);
}

export default MyComponent;

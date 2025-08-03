import React, { useState } from 'react';

function MyComponent() {

	// Initialize state with an array of food strings
	const [foods, setFoods] = useState(["burger", "fries", "nachos", "salad", "pizza", "ramen"]);

	// Adds a new food to the list by reading from an input box
	function handleAddFood() {
		const newFood = document.getElementById("foodInput").value; // Get value from input
		document.getElementById("foodInput").value = ""; // Clear the input box

		// Add the new food to the existing array using spread operator
		setFoods(f => [...f, newFood]);
	}

	// Removes a food item based on its index in the array
	function handleRemoveFood(index) {
		// .filter() creates a new array without the item at the given index
		// '_' is used instead of the element name to indicate it's intentionally ignored
		setFoods(f => f.filter((_, i) => i !== index));
	}

	return (
		<div>
			<h1>List of Foods:</h1>

			<ul>
				{
					// .map() loops through the foods array and returns a <li> for each item
					// 'index' is used as a unique key for React to optimize rendering

					foods.map((element, index) => (
						<li
							key={index}
							style={{ cursor: "pointer" }}

							// Use an *arrow function* to wrap the event handler
							// If we did: onDoubleClick={handleRemoveFood(index)}, it would run immediately during render
							// With: () => handleRemoveFood(index), the function is only called when the user double-clicks
							onDoubleClick={() => handleRemoveFood(index)}
						>
							{element}
						</li>
					))
				}
			</ul>

			<input type="text" id='foodInput' placeholder="Enter Food Name:"
				style={{ cursor: "pointer" }}
			/>

			<button
				onClick={handleAddFood} /* dont need arrow function because not passing args to function */
				style={{ backgroundColor: "black", color: "white", cursor: "pointer" }}
			>
				Add Food
			</button>
		</div>
	);
}

export default MyComponent;

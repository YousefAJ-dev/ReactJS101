// updater function = 	A function passed as an argument to setState() usually
//						ex. past method = setYear(year + 1) | better method = setYear(updaterFunction) 
//						Allow for safe updates based on the previous state
//						Used with multiple state updates and asynchronous functions
//						Good practice to use updater functions 

import React, {useState} from 'react';

function MyComponent() {

	const [count, setCount] = useState(0);

	function increment() {
		
		/* Before: *PROBLEMS* [wont update multiple calls during same function as shown below]
		setCount(count + 1);
		setCount(count + 1);
		output: count(0) + 1 (doesnt update)
				count(0) + 1 = 1
		*/

		/* After:  */
		setCount(c => c + 1);
		setCount(c => c + 1);
		// output: (prevCount(0) => prevCount + 1) 
		// 		   (prevCount(1) => prevCount + 1) = 2
	}

	function decrement() {
		setCount(c => c - 1);
		setCount(c => c - 1);
		setCount(c => c - 1);
	}

	function reset() {
		setCount(0);
	}

	return(
		<div>
			<p>Count: {count}</p>
			<button type="button" onClick={decrement}>-</button>
			<button type="button" onClick={reset}>0</button>
			<button type="button" onClick={increment}>+</button>
		</div>
	);

}

export default MyComponent;
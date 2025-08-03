import React,{useState} from 'react'

function Counter() {
	
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count+1);
	}

	const decrement = () => {
		if (count > 0) {
			setCount(count-1);
		}
	}

	return(
		<div>
			<h1>Age:</h1>
			<div className='counter'>
				<button className='add-btn' onClick={increment}>+</button>
				<h2>{count}</h2>
				<button className='sub-btn' onClick={decrement}>-</button>
			</div>
		</div>
	);

}

export default Counter;
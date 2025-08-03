// click event = An interaction when a user clicks on a specific element.
//				 We can respond to clicks by passing
//				 a callback to the onClick event handler

function Button() {

	/*
	let count = 0;
	const handleClick2 = (name) => {
		if (count < 3){
			count++;
			console.log(`${name} you clicked me ${count} times`);
		}
	};
	*/

	const handleClick = (e) => e.target.textContent = "Ouch!";
	
	return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);

	//return (<button onClick={(e) => handleClick(e)}>Click me</button>);
}

export default Button
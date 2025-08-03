import blah from './Button.module.css'

function Button() {

	/* inline styling
	const blah = {
		box-sizing: "border-box";
		border: "none";
		border-radius: "5px";
		padding: "10px 20px";
		
		background-color: "rgb(206, 166, 206)";
		font-size: "2em";

		cursor: "pointer";
		transition: "transform 0.05s ease"; /* adds a 0.05s ease transform 
	}
	*/

	return(

		//<button style={blah}>Click Me</button> Call inline styling
		
		//	create a name to reference the import e.g blah, then the ".class-name" in this case button
		<button className={blah.button}>Click Me</button>
	);

}

export default Button
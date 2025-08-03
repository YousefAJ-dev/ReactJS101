import React, {useState} from "react";

function ColorPicker() {
	
	const [color, setColor] = useState("#000000");

	function handleColorChange(e){
		setColor(e.target.value);
	}

	return(
		<div className="color-container">
			<h1>ColorPicker</h1>
			<div className="box" style={{backgroundColor: color}}>Selected color: {color}</div>
			<label>Select A Color:</label>
			<input className="color-box" type="color" value={color} onChange={handleColorChange}/>
		</div>
	);

	
}

export default ColorPicker;
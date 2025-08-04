// useContext() =	React Hook that allows for you to share values between 
// 					multiple levels of components without
//					passing props through each level

import ComponentC from './ComponentC';

function ComponentB() {
	
	return(
		<div className="box">
			<h1>ComponentB</h1>
			<ComponentC />
		</div>
	);

	//<ComponentC user={props.user}/>

}

export default ComponentB; 
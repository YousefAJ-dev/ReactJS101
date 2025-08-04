// useContext() =	React Hook that allows for you to share values between 
// 					multiple levels of components without
//					passing props through each level

import ComponentD from './ComponentD';
import React, {useContext} from 'react'
import { UserContext } from './ComponentA';

function ComponentC() {
	
	const user = useContext(UserContext);

	return(
		<div className="box">
			<h1>ComponentC</h1>
			<h2>{user} is almost to the end!</h2>
			<ComponentD/>
		</div>
	);

	//<ComponentD user={props.user}/>
}

export default ComponentC; 
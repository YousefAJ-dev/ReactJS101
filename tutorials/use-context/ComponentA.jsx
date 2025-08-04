// useContext() =	React Hook that allows for you to share values between 
// 					multiple levels of components without
//					passing props through each level

/* PROVIDER COMPONENT
	1. import {createContext} from 'react'
	2. export const MyContext = createContext();
	3. 	<MyContext.Provider value={var_name}>
			<Immediate-Child /> *NOT CONSUMER*
		</MyContext.Provider>
 */

/* CONSUMER COMPONENTS
	1. 	import React, {useContext} from 'react'
		import {createContext} from ./ComponentA;
	2.	const value = useContext(MyContext);
 */


import { useState, createContext } from "react";
import ComponentB from "./ComponentB";


export const UserContext = createContext();

function ComponentA() {
	
	const [user,setUser] = useState("BabyJ");

	return(
		<div className="box">
			<h1>ComponentA</h1>
			<h2>Hello {user}</h2>
			<UserContext.Provider value={user}>
				<ComponentB/>
			</UserContext.Provider>
		</div>
	);

	

	// using props method
	//<ComponentB user={user}/>
}

export default ComponentA; 
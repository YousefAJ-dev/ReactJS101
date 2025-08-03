// conditional rendering = 	allows you to control what gets rendered
//							in your appplication based on certain conditions
//							(show, hide, or change components)

function UserGreeting(props) {

	const welcomeMsg = <h2 className="login-success">Welcome, {props.username} is Logged In</h2>;

	const loginPrompt = <h2 className="login-error">Please log in to continue...</h2>	 ;

	return ( props.isLoggedIn ? welcomeMsg : loginPrompt );

}

export default UserGreeting
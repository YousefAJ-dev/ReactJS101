import UserGreeting from './UserGreeting'

function App() {

	return (
		<>
			<UserGreeting isLoggedIn={true} username="BabyJ"/>
			<hr />
			<UserGreeting isLoggedIn={false} username="Nishie"/>
		</>
	);

}

export default App

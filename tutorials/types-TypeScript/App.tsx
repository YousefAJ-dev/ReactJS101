import Student from './Student.tsx'

function App() {

	return (
		<>
			<hr />
			<Student name="Spongebob" age={30} isWorking={true} />
			<hr />
			<Student name="Patrick" age={35} isWorking={false} />
			<hr />
			<Student name="Sandy" age={24} isWorking={false} />
			<hr />
			<Student name="Squidward" age={54} isWorking={true} />
			<hr />
		</>
	);

}

export default App

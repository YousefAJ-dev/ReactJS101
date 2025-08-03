// props =	read-only properties that are SHARED between components
//			A parent component can send data to a child component
//			<Component key=value />

// propTypes = 	a mechanism that ensures that the passed value
// 				is of the correct datatype.
//				age: PropTypes.number

function Student(props: StudentProps) {

	return (
		// param name [props] ".keyName" [name]; you can set the value to whatever when calling Student
		// ie <Student name="Spongebob" [key=value]/>
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Working?: {props.isWorking ? "Yes" : "No"}</p>
		</div>
	);

}

type StudentProps = {
	name: string,
	age: number,
	isWorking: boolean
}

export default Student
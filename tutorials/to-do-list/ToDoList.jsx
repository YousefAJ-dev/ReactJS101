import React, { useState } from "react";

function ToDoList() {

	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [taskDesc, setTaskDesc] = useState("");


	function handleAddTask() {

		if (taskName.trim() === "") {
			return;
		}

		const newTask = {
			taskName: taskName,
			taskDesc: taskDesc
		}

		setTaskName("");
		setTaskDesc("");

		setTasks(t => [...t, newTask]);

	}

	function handleRemoveTask(index) {

		setTasks(t => t.filter((_, i) => i !== index));

	}

	function moveTaskUp(index) {
		if (index === 0) { // if already first in array no need to update
			return;
		}

		const updatedTasks = [...tasks];
		[updatedTasks[index - 1], updatedTasks[index]] =
			[updatedTasks[index], updatedTasks[index - 1]];

		setTasks(updatedTasks);

	}

	function moveTaskDown(index) {

		if (index === tasks.length - 1) { // if already last in array no need to update
			return;
		}

		const updatedTasks = [...tasks];
		[updatedTasks[index], updatedTasks[index + 1]] =
			[updatedTasks[index + 1], updatedTasks[index]];

		setTasks(updatedTasks);
	}

	function handleAddTaskName(e) {

		setTaskName(e.target.value);
	}

	function handleAddTaskDesc(e) {

		setTaskDesc(e.target.value);
	}

	return (
		<div className="todo-container">
			<h1 className="todo-title" >To Do List</h1>

			<div className="form-group">
				<label className="form-label">Task Name: </label>
				<input type="text" className="form-input" placeholder="Enter Task Name..." value={taskName} onChange={handleAddTaskName} />

				<label className="form-label">Task description: </label>
				<textarea type="text"
					className="form-textarea"
					value={taskDesc}
					placeholder="details...(optional)"
					onChange={handleAddTaskDesc}
				/>

				<button className="btn add" onClick={handleAddTask}>Add Task</button>
			</div>

			<h2 className="task-list-heading">Tasks:</h2>
			<ul className="tasks-list">
				{tasks.map((task, index) =>
					<li className="task-item" key={index}>
						<div className="task-item--content">
							<p className="task-item--name">{task.taskName}</p>
							<p className="task-item--desc">{task.taskDesc}</p>
						</div>
						<div className="task-item--btns">
							<button className="btn delete" onClick={() => handleRemoveTask(index)}>Delete</button>
							<button className="btn move" onClick={() => moveTaskUp(index)}>↑</button>
							<button className="btn move" onClick={() => moveTaskDown(index)}>↓</button>
						</div>
					</li>
				)}
			</ul>


		</div>
	);

}

export default ToDoList
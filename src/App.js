import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
	constructor() {
		super();

		this.state = {
			tasks: [],
			task: this.getInitialTaskState(),
		};
	}

	render() {
		const { task, tasks }  = this.state;
		return (
			<div>
				<div>
					<label htmlFor="taskInput">Task:</label>
					<input 
						type="text"
						id="taskInput"
						value={task.text}
						onChange={this.handleChange}
					/>
					<button 
						type="button"
						onClick={this.addTask}
					>
						Add Task
					</button>
				</div>
				<Overview tasks={tasks} />
			</div>
		);
	}

	getInitialTaskState = () => ({
		text: '',
		id: uniqid(),
	});

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
			}
		})
	};

	addTask = (e) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.concat(prevState.task),
			task: this.getInitialTaskState(),
		}));
	};
}

export default App;

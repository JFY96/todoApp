import React, { Component } from 'react';
import uniqid from 'uniqid';

import './App.scss';

import Overview from './components/Overview';

class App extends Component {
	constructor() {
		super();

		this.state = {
			taskToCreate: this.getInitialTaskState(),
			tasks: [],
			editTaskId: '',
		};

		this.editInputRef = React.createRef(null);
	}

	render() {
		const { taskToCreate, tasks, editTaskId }  = this.state;
		return (
			<div className="container">
				<Overview 
					taskToCreate={taskToCreate}
					tasks={tasks}
					editTaskId={editTaskId}
					handleCreateTaskChange={this.handleCreateTaskChange}
					addTask={this.addTask}
					completeTask={this.completeTask}
					deleteTask={this.deleteTask}
					editTask={this.editTask}
					editSave={this.editSave}
					editCancel={this.editCancel}
					editInputRef={this.editInputRef}
				/>
			</div>
		);
	}

	componentDidUpdate() {
		if (this.state.editTaskId !== '') this.handleEditTaskFocus();
	}

	handleEditTaskFocus = () => {
		this.editInputRef.current.focus();
	}

	getInitialTaskState = () => ({
		id: uniqid(),
		text: '',
		complete: false,
	});

	handleCreateTaskChange = (propertyName, val) => {
		this.setState((prevState) => ({
			taskToCreate: {
				...prevState.taskToCreate,
				[propertyName]: val,
			}
		}));
	};

	addTask = (e) => {
		this.setState((prevState) => {
			if (prevState.taskToCreate.text.trim() === '') return prevState;
			else return {
				tasks: prevState.tasks.concat(prevState.taskToCreate),
				taskToCreate: this.getInitialTaskState(),
			}
		});
	};

	completeTask = (id) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.map(task => task.id === id ? { ...task, complete: !task.complete } : task),
		}));
	};

	deleteTask = (id) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.filter(task => task.id !== id),
		}));
	};

	editTask = (id) => {
		this.setState({
			editTaskId: id,
		});
	};

	editSave = (text) => {
		this.setState((prevState) => ({
			tasks: prevState.tasks.map(task => 
				task.id === prevState.editTaskId ? { ...task, text } : task
			),
			editTaskId: '',
		}));
	};

	editCancel = () => {
		this.editTask('');
	};
}

export default App;

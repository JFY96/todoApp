import React, { useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid';

import useStateWithLocalStorage from '../hooks/useStateWithLocalStorage';
import Task from './Task';
import TaskCreate from './TaskCreate';
import TaskEdit from './TaskEdit';
import './Overview.scss';

const getInitialTaskState = () => ({
	id: uniqid(),
	text: '',
	complete: false,
});

const Overview = () => {
	const [taskToCreate, setTaskToCreate] = useState(getInitialTaskState());
	const [tasks, setTasks] = useStateWithLocalStorage('tasks');
	const [editTaskId, setEditTaskId] = useState('');

	const editInputRef = useRef(null);

	useEffect(() => {
		if (editTaskId !== '') editInputRef.current.focus();
	}, [editTaskId]);

	const handleCreateTaskChange = (propertyName, val) => {
		setTaskToCreate(prevTaskToCreate => ({
			...prevTaskToCreate,
			[propertyName]: val,
		}))
	};

	const addTask = () => {
		if (taskToCreate.text.trim() === '') return;
		setTasks(prevTasks => prevTasks.concat(taskToCreate));
		setTaskToCreate(getInitialTaskState());
	};

	const completeTask = (id) => {
		setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, complete: !task.complete } : task));
	};

	const deleteTask = (id) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
	};

	const editTask = (id) => setEditTaskId(id);

	const editSave = (text) => {
		setTasks(prevTasks => prevTasks.map(task => task.id === editTaskId ? { ...task, text } : task));
		setEditTaskId('');
	};

	const editCancel = () => setEditTaskId('');

	return (
		<div className="overview">
			<TaskCreate 
				taskToCreate={taskToCreate}
				handleChange={handleCreateTaskChange}
				addTask={addTask}
				editInputRef={editInputRef}
			/>
			<hr style={{marginBottom: '0px'}} />
			{tasks.map((task) => {
				if (task.id === editTaskId) {
					return (
						<TaskEdit 
							key={task.id}
							task={task}
							editSave={editSave}
							editCancel={editCancel}
							editInputRef={editInputRef}
						/>
					);
				}
				return (
					<Task 
						key={task.id}
						task={task}
						completeTask={completeTask}
						editTask={editTask}
						deleteTask={deleteTask}
					/>
				);
			})}
		</div>
	);
};

export default Overview;

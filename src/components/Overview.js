import React from 'react';

import TaskCreate from './TaskCreate';
import Task from './Task';
import './Overview.scss';
import TaskEdit from './TaskEdit';

const Overview = ({ 
	taskToCreate,
	tasks,
	editTaskId,
	handleCreateTaskChange,
	addTask,
	completeTask,
	deleteTask,
	editTask,
	editSave,
	editCancel,
	editInputRef,
}) => {
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

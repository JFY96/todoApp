import React from 'react';

import './Task.scss';

const Task = ({
	task,
	completeTask,
	editTask,
	deleteTask,
}) => {
	return (
		<span className="overview__task overview__task--view">
			<span className="overview__task__buttons">
				<span 
					className="material-icons overview__task__buttons__button overview__task__buttons__button--start"
					onClick={() => { completeTask(task.id) }}
				>
					{task.complete ? 'check_box' : 'check_box_outline_blank'}
				</span>
			</span>
			<span 
				className={"overview__task__text" + (task.complete ? " overview__task__text--complete" : "")}
			>
				{task.text}
			</span>
			<span className="overview__task__buttons overview__task__buttons--end">
				<span 
					className="material-icons overview__task__buttons__button"
					onClick={() => { editTask(task.id) }}
				>
					edit
				</span>
				<span
					className="material-icons overview__task__buttons__button"
					onClick={() => { deleteTask(task.id) }}
				>
					delete
				</span>
			</span>
		</span>
	);
};

export default Task;
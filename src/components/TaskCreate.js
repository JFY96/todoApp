import React from 'react';

const TaskCreate = ({ taskToCreate, handleChange, addTask }) => {
	return (
		<span className="overview__task overview__task--edit">
			<input 
				type="text"
				className="overview__task__text-input"
				placeholder="New Task"
				value={taskToCreate.text}
				onChange={(e) => { handleChange('text', e.target.value) }}
				onKeyUp={(e) => {
					if (e.code === 'Enter') { addTask() }
				}}
			/>
			<span className="overview__task__buttons">
				<span 
					className="material-icons overview__task__buttons__button"
					onClick={addTask}
				>
					add
				</span>
			</span>
		</span>
	);
};

export default TaskCreate;
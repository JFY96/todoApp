import React, { useState } from 'react';

const TaskEdit = ({ task, editSave, editCancel, editInputRef }) => {
	const [text, setText] = useState(task.text);
	return (
		<span className="overview__task overview__task--edit">
			<input 
				type="text"
				className="overview__task__text-input"
				value={text}
				onChange={(e) => { setText(e.target.value) }}
				onKeyUp={(e) => {
					if (e.code === 'Enter') { editSave(text) }
				}}
				ref={editInputRef}
			/>
			<span className="overview__task__buttons">
				<span 
					className="material-icons overview__task__buttons__button"
					onClick={() => { editCancel() }}
				>
					cancel
				</span>
				<span 
					className="material-icons overview__task__buttons__button"
					onClick={() => { editSave(text) }}
				>
					check_circle
				</span>
			</span>
		</span>
	);
};

export default TaskEdit;
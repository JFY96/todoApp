import React from 'react';

const Overview = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((tasks) => {
				return <li key={tasks.id}>{tasks.text}</li>
			})}
		</ul>
	);
};

export default Overview;

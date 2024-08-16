function Task(props) {
	return (
		<li>{props.description}<input type='checkbox' checked={props.completed} readOnly/> </li>
	);
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				{/* {tasks} */}
				{props.tasks.map(x=>
					<Task description={x.des}
					completed={x.comp}
					/>
				)}
			</ul>
		</div>
	);
}

export default List;

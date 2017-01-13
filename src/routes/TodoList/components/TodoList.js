import React, { PropTypes } from 'react'

export const TodoList = ({todolist, addTodo}) => (
	<div style={{ margin: '0 auto' }}>
		<h2>Todo List</h2>
		<div>
			<button className='btn btn-primary' onClick={addTodo}>
				Add 'Hello World'
			</button>
		</div>
		<div>
			<ul>
			{todolist.map(todo =>
				<li key={todo.id}>
				  {todo.text}
				</li>
			)}
			</ul>
		</div>
	</div>
)

TodoList.propTypes = {
	todolist: PropTypes.arrayOf(PropTypes.shape({
	    id: PropTypes.number.isRequired,
	    text: PropTypes.string.isRequired
	  }).isRequired).isRequired,
	addTodo : PropTypes.func.isRequired
}

export default TodoList
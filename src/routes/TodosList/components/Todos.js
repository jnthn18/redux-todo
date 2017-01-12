import React from 'react'

export const TodosList = (props) => (
	<div style={{ margin: '0 auto' }}>
		<h2>Todos List</h2>
		<div>
			<button className='btn btn-primary' onClick={props.addTodo}>
				Add 'Hello World'
			</button>
		</div>
		{props.todos.length
			? <div>
				<ul>
					{props.todos.map(todo => 
						<li key={todo.id}>
							{todo.value}
						</li>
					)}
				</ul>
			</div>
			: null
		}
	</div>
)

TodosList.propTypes = {
	todosList: React.PropTypes.object,
	addTodo : React.PropTypes.func.isRequired
}

export default TodosList
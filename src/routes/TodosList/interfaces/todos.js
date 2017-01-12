/* @flow */

export type TodosObject = {
	id: number,
	value: string.
	completed: false
}

export type TodosStateObject = {
	todosList: Array<TodosObject>
}
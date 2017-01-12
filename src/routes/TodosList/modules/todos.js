/* @flow */

import type { TodosObject, TodosStateObject } from '../interfaces/todos.js'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'

// ------------------------------------
// Actions
// ------------------------------------
let availableId = 0
export function addTodo (value: string) {
  return {
    type    : ADD_TODO,
    payload : {
    	value: value,
    	id: availableId++,
    	completed: false
    }
  }
}

export const actions = {
  addTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]    : (state: TodosStateObject, action: {payload: TodosObject}): TodosStateObject => {
  	return ({ ...state, todosList: state.todosList.concat(action.payload) })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: TodosStateObject = { todosList: [] }
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
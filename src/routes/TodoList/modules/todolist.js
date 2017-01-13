// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'

// ------------------------------------
// Actions
// ------------------------------------
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const actions = {
  addTodo,
  toggleTodo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_TODO]: (state, action) => {
    return Object.assign({}, state, { todos: state.todos.concat(action.payload) })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: todoList = { todos: [] }
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'todolist',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TodoList = require('./containers/TodoListContainer').default
      const reducer = require('./modules/todolist').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'todolist', reducer })

      /*  Return getComponent   */
      cb(null, TodoList)

    /* Webpack named bundle   */
    }, 'todolist')
  }
})
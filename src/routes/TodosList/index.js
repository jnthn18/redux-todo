import { injectReducer } from '../../store/reducers'

export default (store) => ({
	path: 'todos',
	/*  Async getComponent is only invoked when route matches   */
	getComponent (nextState, cb) {
		/*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
		require.ensure([], (require) => {
			/*  Webpack - use require callback to define
	          dependencies for bundling   */
	         const TodosList = require('./containers/TodosContainer').default
	         const reducer  = require('./modules/todos').default

	        /*  Add the reducer to the store on key 'counter'  */
	      	injectReducer(store, { key: 'todos', reducer })

			/*  Return getComponent   */
	      	cb(null, TodosList)

		/* Webpack named bundle   */
		}, 'todos')
	}
})
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import createLogger from 'redux-logger'
import { combinedReducers } from '../reducers/'
import { getReports } from '../actions/getReports'

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk, logger),
  applyMiddleware(thunk))

store.dispatch(getReports('reports'))

export default store

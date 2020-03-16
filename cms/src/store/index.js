import {createStore, applyMiddleware} from 'redux'
import {thunk} from './middleware/index'
import rootReducer from './reducers/index'

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store

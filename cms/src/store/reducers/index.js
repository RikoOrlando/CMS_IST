import user from './user'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import data from './data'

export default combineReducers({user, form: formReducer, data})
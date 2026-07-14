import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import employeeReducer from './Reducer';

const rootReducer = combineReducers({
    employee : employeeReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;
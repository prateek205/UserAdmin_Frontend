import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'react-redux'

const rootReducer = combineReducers({
    employee = employeeReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;
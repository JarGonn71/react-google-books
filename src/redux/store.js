import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import bookReducer from './books'
import filterReducer from './filter'

let rootReducer = combineReducers({
    bookReducer,
    filterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))

);

window.store = store

export default store
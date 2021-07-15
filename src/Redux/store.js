import {createStore,applyMiddleware,combineReducers} from 'redux'
import {movieReducer} from './movies/movieReducer'
import {UserReducer} from './user/userReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {logger} from 'redux-logger'
export const store=createStore(combineReducers({
    movie:movieReducer,
    user:UserReducer
}),composeWithDevTools(applyMiddleware(logger)))
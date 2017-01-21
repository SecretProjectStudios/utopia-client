import { combineReducers } from 'redux'
import JoinGame from './JoinGame'
import * as reducers from './reducer'

const reducer = combineReducers(reducers)

export {
    JoinGame,
    reducer,
}

import { constants } from './actions'

export const playerName = (state = '', action) => action.type === constants.SET_PLAYER_NAME ? action.value : state
export const gameID = (state = '', action) => action.type === constants.SET_GAME_ID ? action.value : state
export const gameReference = (state = '', action) => action.type === constants.SET_GAME_REFERENCE ? action.value : state
export const playerList = (state = [], action) => action.type === constants.SET_PLAYER_LIST ? action.value : state
export const playerId = (state = '', action) => action.type === constants.SET_PLAYER_ID ? action.value : state
export const gameState = (state = {}, action) => action.type === constants.SET_GAME_STATE ? action.value : state

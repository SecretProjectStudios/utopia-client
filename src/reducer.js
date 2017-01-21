import { constants } from './actions'

export const playerName = (state = '', action) => action.type === constants.SET_PLAYER_NAME ? action.value : state
export const roomCode = (state = '', action) => action.type === constants.SET_ROOM_CODE ? action.value : state
export const roomReference = (state = '', action) => action.type === constants.SET_ROOM_REFERENCE ? action.value : state
export const playerList = (state = [], action) => action.type === constants.SET_PLAYER_LIST ? action.value : state


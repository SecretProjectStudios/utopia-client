import axios from 'axios'
import { push } from 'react-router-redux'

export const constants = {
  SET_PLAYER_ID: 'SET_PLAYER_ID',
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  SET_ROOM_CODE: 'SET_ROOM_CODE',
  SET_PLAYER_LIST: 'SET_PLAYER_LIST',
  SET_ROOM_REFERENCE: 'SET_ROOM_REFERENCE',
  START_GAME: 'START_GAME',
  SERVER_ADDRESS: 'https://utopia-server.herokuapp.com',
}

export const setPlayerName = (value) => {
  return {
    type: constants.SET_PLAYER_NAME,
    value,
  }
}

const setPlayerID = (value) => {
  return {
    type: constants.SET_PLAYER_ID,
    value,
  }
}

export const setRoomCode = (value) => {
  return {
    type: constants.SET_ROOM_CODE,
    value,
  }
}

export const setRoomReference = (value) => {
  return {
    type: constants.SET_ROOM_REFERENCE,
    value,
  }
}

export const setPlayerList = (value) => {
  return {
    type: constants.SET_PLAYER_LIST,
    value,
  }
}

export const goToCreateGame = () => dispatch => dispatch(push('/create'))
export const goToJoinGame = () => dispatch => dispatch(push('/join'))

export const joinGame = () => (dispatch, getState) => {
  const state = getState()
  const url = `${constants.SERVER_ADDRESS}/games/${state.roomCode}`
  axios.get(url)
       .then(() => dispatch(push('/lobby')))
}

export const createGame = () => (dispatch, getState) => {
  const playerName = getState().playerName
  const url = `${constants.SERVER_ADDRESS}/games`
  axios.post(url, { playerName })
       .then((response) => {
         dispatch(setPlayerID(response.data._id))
         dispatch(setRoomCode(response.data.gameId))
       })
       .then(() => dispatch(push('/lobby')))
}

export const getGameState = () => (dispatch, getState) => {
  const state = getState()
  const url = `${constants.SERVER_ADDRESS}/games/${state.roomCode}`
  axios.get(url)
       .then((response) => {
         dispatch(setPlayerList(response.data.players))
         dispatch(setRoomReference(response.data.reference))
       })
}

export const lodgeVote = () => (dispatch, getState) => {
  const state = getState()
  const url = `${constants.SERVER_ADDRESS}/games/${state.roomCode}`
}

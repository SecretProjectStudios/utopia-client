import axios from 'axios'
import { push } from 'react-router-redux'

export const constants = {
  SET_PLAYER_ID: 'SET_PLAYER_ID',
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  SET_GAME_ID: 'SET_GAME_ID',
  SET_PLAYER_LIST: 'SET_PLAYER_LIST',
  SET_GAME_REFERENCE: 'SET_GAME_REFERENCE',
  SET_GAME_STATE: 'SET_GAME_STATE',
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

export const setGameID = (value) => {
  return {
    type: constants.SET_GAME_ID,
    value,
  }
}

export const setGameReference = (value) => {
  return {
    type: constants.SET_GAME_REFERENCE,
    value,
  }
}

export const setPlayerList = (value) => {
  return {
    type: constants.SET_PLAYER_LIST,
    value,
  }
}

export const gameState = (value) => {
  return {
    type: constants.SET_GAME_STATE,
    value,
  }
}

export const goToCreateGame = () => dispatch => dispatch(push('/create'))
export const goToJoinGame = () => dispatch => dispatch(push('/join'))

export const joinGame = () => (dispatch, getState) => {
  const state = getState()
  const url = `${constants.SERVER_ADDRESS}/games/${state.gameReference}/${state.playerName}`
  axios.post(url)
       .then((response) => {
         dispatch(setPlayerID(response.data._id))
         dispatch(setGameID(response.data.gameId))
         dispatch(push(`/game/${response.data.gameId}/${response.data._id}`))
       })
}

export const createGame = () => (dispatch, getState) => {
  const playerName = getState().playerName
  const url = `${constants.SERVER_ADDRESS}/games`
  axios.post(url, { playerName })
       .then((response) => {
         dispatch(setPlayerID(response.data._id))
         dispatch(setGameID(response.data.gameId))
         dispatch(push(`/game/${response.data._id}`))
       })
}

export const getGameState = playerId => (dispatch) => {
  const url = `${constants.SERVER_ADDRESS}/players/${playerId}`
  axios.get(url)
      .then((response) => {
        dispatch(gameState(response.data))
      })
}

export const lodgeVote = () => {}/* (dispatch, getState) => {
  const state = getState()
  const url = `${constants.SERVER_ADDRESS}/games/${state.gameID}`
}*/

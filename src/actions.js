import axios from 'axios'
import { push } from 'react-router-redux'

export const constants = {
  SET_PLAYER_ID: 'SET_PLAYER_ID',
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  GET_PLAYER_LIST: 'GET_PLAYER_LIST',
  START_GAME: 'START_GAME',
  SET_ROOM_CODE: 'SET_ROOM_CODE',
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

export const getPlayerList = () => (dispatch, getState) => {
  const state = getState()
  const url = `https://utopia-server.herokuapp.com/games/${state.room.roomCode}`
}

export const joinGame = () => (dispatch, getState) => {
  const state = getState()
  const url = `https://utopia-server.herokuapp.com/games/${state.roomCode}`
  axios.get(url)
       .then(() => dispatch(push('/lobby')))
}

export const createGame = () => (dispatch, getState) => {
  const playerName = getState().playerName
  console.log('player name: ', playerName)
  const url = 'https://utopia-server.herokuapp.com/games'
  axios.put(url, { playerName })
       .then((response) => {
         dispatch(setPlayerID(response.data._id))
         dispatch(setRoomCode(response.data.gameId))
       })
       .then(() => dispatch(push('/lobby/:reference')))
}

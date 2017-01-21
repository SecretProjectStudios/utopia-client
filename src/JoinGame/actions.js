export const constants = {
  SET_PLAYER_NAME: 'SET_PLAYER_NAME',
  SET_ROOM_CODE: 'SET_ROOM_CODE',
}

export const setPlayerName = (value) => {
  return {
    type: constants.SET_PLAYER_NAME,
    value,
  }
}

export const setRoomCode = (value) => {
  return {
    type: constants.SET_ROOM_CODE,
    value,
  }
}

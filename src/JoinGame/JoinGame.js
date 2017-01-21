import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button } from 'semantic-ui-react'
import * as Actions from './actions'

const JoinGame = ({ roomCode, playerName, setPlayerName, setRoomCode }) => {
  return (
    <Container textAlign="center">
      <Input label={'Room code'} fluid onChange={(e, { value }) => setRoomCode(value)} value={roomCode} />
      <br />
      <br />
      <Input label={'Name'} fluid onChange={(e, { value }) => setPlayerName(value)} value={playerName} />
      <br />
      <br />
      <Button color={'green'} fluid>Join</Button>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps.params,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)

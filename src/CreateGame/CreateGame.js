import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'

const CreateGame = ({ playerName, createGame, setPlayerName }) => {
  return (
    <Container textAlign="center">
      <Segment inverted color={'green'} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Create a Council</Header>
      </Segment>
      <Segment>
        <Input label={'Your name'} size={'huge'} fluid onChange={(e, { value }) => setPlayerName(value)} value={playerName} />
        <br />
        <br />
        <Button color={'green'} size={'huge'} disabled={!playerName} fluid onClick={createGame}>Create Game</Button>
      </Segment>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)

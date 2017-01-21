import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'
import { pickAColour } from '../util/pickAColour'

const CreateGame = ({ playerName, createGame, setPlayerName }) => {
  return (
    <Container textAlign="center">
      <Segment inverted color={pickAColour()} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Create a Council</Header>
      </Segment>
      <Segment>
        <Input label={'Your name'} size={'big'} fluid onChange={(e, { value }) => this.props.setPlayerName(value)} value={playerName} />
        <br />
        <br />
        <Button color={'green'} size={'big'} disabled={!playerName} fluid onClick={createGame}>Create Game</Button>
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

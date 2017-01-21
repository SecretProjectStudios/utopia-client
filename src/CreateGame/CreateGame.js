import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Segment } from 'semantic-ui-react'
import SectionHeader from '../components/SectionHeader'
import * as Actions from '../actions'

const CreateGame = ({ playerName, createGame, setPlayerName }) => {
  return (
    <Container textAlign="center">
      <SectionHeader colour="green" header="Create a Council" />
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

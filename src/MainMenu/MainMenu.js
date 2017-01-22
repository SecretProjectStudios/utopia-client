import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Header, Segment, Container } from 'semantic-ui-react'
import * as Actions from '../actions'

const MainMenu = ({ goToCreateGame, goToJoinGame }) => {
  return (
    <Container>
      <Segment size={'massive'} padded>
        <Header size={'huge'} textAlign={'center'} color={'blue'}>The Council</Header>
      </Segment>
      <Segment>
        <Button fluid size={'massive'} color="green" onClick={goToCreateGame}>Create Game</Button>
        <br />
        <Button fluid size={'massive'} color="blue" onClick={goToJoinGame}>Join Game</Button>
      </Segment>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

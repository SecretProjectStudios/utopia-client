import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Header, Segment } from 'semantic-ui-react'
import { pickAColour } from '../util/pickAColour'

const Game = () => {
  return (
    <Container>
      <Segment inverted color={pickAColour()} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Your goal is</Header>
      </Segment>
      <Segment size={'big'}>
        Current bill
      </Segment>
      <Segment size={'big'}>
        Voting buttons
      </Segment>
    </Container>
  )
}

export default Game

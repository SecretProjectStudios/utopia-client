import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import { pickAColour } from '../util/pickAColour'

const Game = () => {
  return (
    <Container>
      <Segment inverted color={pickAColour()} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Your goal is</Header>
      </Segment>
    </Container>
  )
}

export default Game

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'

const CreateGame = () => {
  return (
    <Container textAlign="center">
      <Segment inverted color={'green'} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Create a Council</Header>
      </Segment>
    </Container>
  )
}

export default CreateGame

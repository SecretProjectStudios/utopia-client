import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import { pickAColour } from '../util/pickAColour'

const CreateGame = () => {
  return (
    <Container textAlign="center">
      <Segment inverted color={pickAColour()} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Create a Council</Header>
      </Segment>
      <Segment>
        <Input label={'Your name'} size={'big'} fluid onChange={console.log('name')} />
        <br />
        <br />
        <Button color={'green'} size={'big'} fluid onClick={console.log('create game')}>Create Game</Button>
      </Segment>
    </Container>
  )
}

export default CreateGame

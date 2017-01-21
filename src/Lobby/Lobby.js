import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment, List } from 'semantic-ui-react'
import * as Actions from './actions'

const Lobby = ({ playerList }) => {
  return (
    <Container>
      <Segment inverted color={'teal'} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Game ####</Header>
      </Segment>
      <Segment>
        <List>
          {
            playerList.map(player => (<List.Item>{player.name}</List.Item>))
          }
        </List>
      </Segment>
      <Segment>
        <Button>Start Game</Button>
      </Segment>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.lobbyReducer,
    ...ownProps.params,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)

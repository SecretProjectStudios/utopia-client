import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Header, Segment, List } from 'semantic-ui-react'
import * as Actions from '../actions'
import { pickAColour } from '../util/pickAColour'

class Lobby extends React.Component {
  componentWillMount() {
    this.props.getPlayerList()
  }
  render() {
    const players = this.props.playerList
    return (
      <Container>
        <Segment inverted color={pickAColour()} size={'massive'}>
          <Header size={'huge'} textAlign={'center'}>Game {this.props.roomCode}</Header>
        </Segment>
        <Segment>
          <Button icon="refresh" onClick={this.props.getPlayerList} floated={'right'} />
          <br />
          <List divided size={'big'}>
            <List.Header>Players</List.Header>
            { players.map((player) => { return (<List.Item>{player.name}</List.Item>) }) }
          </List>
          <Button fluid size={'massive'} color={'green'}>Start Game</Button>
        </Segment>
      </Container>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)

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
          <Header size={'huge'} textAlign={'center'}>Game ####</Header>
        </Segment>
        <Segment>
          <List>
            { players.map((player) => { return (<List.Item>{player.name}</List.Item>) }) }
          </List>
          <Button icon="refresh" onClick={this.props.getPlayerList} />
        </Segment>
        <Segment>
          <Button>Start Game</Button>
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

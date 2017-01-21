import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Segment, List } from 'semantic-ui-react'
import * as Actions from '../actions'
import SectionHeader from '../components/SectionHeader'

class Lobby extends React.Component {
  componentWillMount() {
    this.props.getGameState()
  }

  render() {
    const players = this.props.playerList
    const header = `Game ${this.props.gameReference}`
    return (
      <Container>
        <SectionHeader colour="blue" header={header} />
        <Segment>
          <Button icon="refresh" circular onClick={this.props.getGameState} floated={'right'} />
          <br />
          <List relaxed size={'massive'}>
            <List.Header>Players</List.Header>
            {players.map((player) => {
              return (
                <List.Item key={`${player._id}`}>
                  <List.Icon name={'user'} />
                  <List.Content>
                    {player.name}
                  </List.Content>
                </List.Item>
              )
            },
            )}
          </List>
          <br />
          <Button fluid size={'huge'} color={'green'}>Start Game</Button>
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

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Button, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'
import PlayerList from '../components/PlayerList'
import SectionHeader from '../components/SectionHeader'

class Game extends React.Component {
  componentWillMount() {
    this.props.getGameState(this.props.playerId)
  }

  render() {
    return (
      <Container>
        <PlayerList players={this.props.playerList} />
        { this.props.gameState.game.state === 'NotStarted' ? <LobbyView /> : <GameView />}
      </Container>
    )
  }
}

const LobbyView = () => {
  const header = 'gaem'
  return (
    <Container>
      <SectionHeader colour="blue" header={header} />
      <Segment>
        <Button icon="refresh" circular onClick={this.props.getGameState} floated={'right'} />
        <br />
        <br />
        <Button fluid size={'huge'} color={'green'}>Start Game</Button>
      </Segment>
    </Container>
  )
}

const GameView = () => {
  return (
    <Container>
      <Segment size={'massive'}>
        <Header size={'massive'} textAlign={'center'}>Your goal is</Header>
      </Segment>
      <Segment size={'big'}>
        Current bill
      </Segment>
      <Segment size={'big'} textAlign={'center'}>
        <Button.Group size={'massive'}>
          <Button color={'green'}>Aye!</Button>
          <Button.Or />
          <Button color={'red'}>Nay!</Button>
        </Button.Group>
      </Segment>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    playerId: state.playerId || ownProps.params.playerId,
    ...ownProps.params,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'
import PlayerList from '../components/PlayerList'
import SectionHeader from '../components/SectionHeader'

class Game extends React.Component {
  componentWillMount() {
    this.props.getGameState(this.props.playerId)
  }

  componentWillReceiveProps() {
    clearTimeout(this.timeout)
    this.startPoll()
  }

  startPoll() {
    this.timeout = setTimeout(() => this.props.getGameState(this.props.playerId), 1000)
  }

  render() {
    let gameComponent

    if (this.props.gameState.game) {
      gameComponent = this.props.gameState.game.state === 'NotStarted' ? <LobbyView {...this.props} /> : <GameView />
    }

    return (
      <Container>
        <PlayerList players={this.props.gameState.players} />
         { gameComponent }
      </Container>
    )
  }
}

const LobbyView = (props) => {
  const header = 'gaem'
  return (
    <Container>
      <SectionHeader colour="blue" header={header} />
      <Segment>
        <Button icon="refresh" circular onClick={props.getGameState} floated={'right'} />
        <br />
        <br />
        <Button fluid size={'huge'} color={'green'} onClick={props.startGame}>Start Game</Button>
      </Segment>
    </Container>
  )
}

const GameView = () => {
  return (
    <Container>
      <SectionHeader colour="teal" header={'geeem'} />
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

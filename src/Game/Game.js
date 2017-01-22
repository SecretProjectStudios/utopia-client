import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Segment, Icon, Header } from 'semantic-ui-react'
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
      gameComponent = this.props.gameState.game.state === 'NotStarted' ? <LobbyView {...this.props} /> : <GameView {...this.props} />
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
  const header = props.gameState.game.reference || ''
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

const GameView = (props) => {
  const ideals = props.gameState.game.ideals
  const targets = props.gameState.player.targets

  const idealsComponents = Object.keys(ideals).map((ideal) => {
    const idealValue = ideals[ideal]
    const targetValue = targets[ideal] || 0

    const rating = []
    const max = (targetValue > idealValue) ? targetValue : idealValue

    for (let i = 0; i < max; i += 1) {
      rating.push(<Icon size="big" name={i < idealValue ? 'circle' : 'circle thin'} color={i < targetValue ? i < idealValue ? 'green' : 'orange' : 'light grey'} />)
    }

    const idealIcon = {
      Education: 'student',
      Economy: 'money',
      Military: 'shield',
      Freedom: 'hand peace',
      Technology: 'lab',
      Spirituality: 'child',
      Environment: 'leaf',
      Diversity: 'group',
    }

    return (
      <div>
        <Icon size="big" name={idealIcon[ideal]} /> {rating}
      </div>
    )
  })

  return (
    <Container>
      <Segment>
        { idealsComponents }
      </Segment>
      <Segment size={'big'}>
        <Header></Header>
      </Segment>
      <Segment size={'big'} textAlign={'center'}>
        <Button.Group size={'massive'}>
          <Button color={'green'} onClick={() => props.lodgeVote('Aye')}>Aye!</Button>
          <Button.Or />
          <Button color={'red'} onClick={() => props.lodgeVote('Nay')}>Nay!</Button>
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

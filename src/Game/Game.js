import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button, Segment, Icon, Header, Card } from 'semantic-ui-react'
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
      gameComponent = this.props.gameState.game.state === 'Started' ? <GameView {...this.props} /> : <LobbyView {...this.props} />
    }

    return (
      <Container>
        {gameComponent}
      </Container>
    )
  }
}

const LobbyView = (props) => {
  const header = props.gameState.game.reference || ''
  return (
    <Container>
      <SectionHeader colour="blue" header={header} />
      <PlayerList players={props.gameState.players} />
      <Segment>
        <Button fluid size={'huge'} color={'green'} onClick={props.startGame}>Start Game</Button>
      </Segment>
    </Container>
  )
}

const GameView = (props) => {
  const ideals = props.gameState.game.ideals
  const targets = props.gameState.player.targets
  const bill = props.gameState.bill
  const passEffect = props.gameState.bill.passEffect
  const failEffect = props.gameState.bill.failEffect

  const passEffectsComponents = Object.keys(passEffect).sort().map((effect) => {
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

    const effectValue = passEffect[effect]

    return (
      <div key={effect}>
        <Icon name={idealIcon[effect]} color="black" size="large" />
        {effectValue >= 0 ? <Icon name="plus" color="green" size="large" /> : <Icon name="minus" color="red" size="large" />}
      </div>
    )
  })

  const failEffectsComponents = Object.keys(failEffect).sort().map((effect) => {
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

    const effectValue = passEffect[effect]

    return (
      <div key={effect}>
        <Icon name={idealIcon[effect]} color="black" size="large" />
        {effectValue >= 0 ? <Icon name="plus" color="green" size="large" /> : <Icon name="minus" color="red" size="large" />}
      </div>
    )
  })

  const idealsComponents = Object.keys(ideals).sort().map((ideal) => {
    const idealValue = ideals[ideal]
    const targetValue = targets[ideal] || 0

    const rating = []
    const max = (targetValue > idealValue) ? targetValue : idealValue

    for (let i = 0; i < max; i += 1) {
      rating.push(<Icon key={ideal + i} name={i < idealValue ? 'circle' : 'dot circle outline'} color={i < targetValue ? 'green' : 'grey'} disabled={i >= targetValue} />)
    }

    for (let i = max; i < 10; i += 1) {
      rating.push(<Icon key={ideal + i} name="circle outline" color="grey" disabled />)
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
      <div key={ideal} >
        <Icon name={idealIcon[ideal]} color="black" size="large" /> {rating}
      </div>
    )
  })

  return (
    <Container>
      <PlayerList players={props.gameState.players} />
      <Segment textAlign="center" vertical>
        {idealsComponents}
      </Segment>
      <Segment textAlign="center" vertical>
        <Header size="huge">{bill.text}</Header>
        <Card.Group itemsPerRow={2}>
          <Card color="green" onClick={() => props.lodgeVote('Aye')}>
            <Card.Header>
              <Header color="green" size="large">AYE!</Header>
            </Card.Header>
            <Card.Description>
              {passEffectsComponents}
            </Card.Description>
          </Card>
          <Card color="red" onClick={() => props.lodgeVote('Nay')}>
            <Card.Header>
              <Header color="red" size="large">NAY!</Header>
            </Card.Header>
            <Card.Description>
              {failEffectsComponents}
            </Card.Description>
          </Card>
        </Card.Group>
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

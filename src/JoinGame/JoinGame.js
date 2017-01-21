import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import * as Actions from './actions'

class JoinGame extends React.Component {
  componentWillMount() {
    if (this.props.reference) {
      this.props.setRoomCode(this.props.reference)
    }
  }

  render() {
    return (
      <Container textAlign="center">
        <Segment inverted color={'grey'} size={'massive'}>
          <Header size={'huge'} textAlign={'center'}>Join the Council</Header>
        </Segment>
        <Segment>
          <Input label={'Room code'} fluid onChange={(e, { value }) => this.props.setRoomCode(value)} value={this.props.roomCode} />
          <br />
          <br />
          <Input label={'Name'} fluid onChange={(e, { value }) => this.props.setPlayerName(value)} value={this.props.playerName} />
          <br />
          <br />
          <Button color={'green'} fluid disabled={!this.props.roomCode || !this.props.playerName} onClick={this.props.joinGame}>Join</Button>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.joinGameReducer,
    ...ownProps.params,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)

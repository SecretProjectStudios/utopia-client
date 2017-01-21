import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'
import SectionHeader from '../components/SectionHeader'

class JoinGame extends React.Component {
  componentWillMount() {
    if (this.props.reference) {
      this.props.setGameReference(this.props.reference)
    }
  }

  render() {
    return (
      <Container textAlign="center">
        <SectionHeader colour="teal" header="Join a Council" />
        <Segment>
          <Input label={'Game code'} size={'huge'} fluid onChange={(e, { value }) => this.props.setGameReference(value)} value={this.props.gameReference} />
          <br />
          <br />
          <Input label={'Your name'} size={'huge'} fluid onChange={(e, { value }) => this.props.setPlayerName(value)} value={this.props.playerName} />
          <br />
          <br />
          <Button color={'green'} size={'huge'} fluid disabled={!this.props.gameReference || !this.props.playerName} onClick={this.props.joinGame}>Join</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame)

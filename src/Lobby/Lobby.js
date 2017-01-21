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
    return (
      <Container>
        <Segment inverted color={pickAColour()} size={'massive'}>
          <Header size={'huge'} textAlign={'center'}>Game ####</Header>
        </Segment>
        <Segment>
          <List>
            {
              this.props.playerList.map(player => (<List.Item>{player.name}</List.Item>))
            }
          </List>
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

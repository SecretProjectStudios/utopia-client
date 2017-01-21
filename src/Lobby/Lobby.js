import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Container, Button, Header, Segment } from 'semantic-ui-react'
import * as Actions from './actions'

const Lobby = () => {
  return (
    <Container>
      <div />
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.lobbyReducer,
    ...ownProps.params,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)

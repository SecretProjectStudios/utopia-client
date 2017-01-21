import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Segment } from 'semantic-ui-react'
import * as Actions from '../actions'

const Game = () => {
  return (
    <Container>
      <Segment size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Your goal is</Header>
      </Segment>
      <Segment size={'big'}>
        Current bill
      </Segment>
      <Segment size={'big'}>
        Voting buttons
      </Segment>
    </Container>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(Game)

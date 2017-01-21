import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid, Header, Segment, Container } from 'semantic-ui-react'
import * as Actions from '../actions'

const MainMenu = ({ goToCreateGame, goToJoinGame }) => {
  const styles = {
    rowSpacer: {
      marginBottom: '20px',
    },
  }

  return (
    <Container>
      <Segment size={'massive'}>
        <Header size={'huge'} textAlign={'center'} color={'blue'}>Utopia</Header>
      </Segment>
      <Segment>
        <Button fluid size={'massive'} color="green" onClick={goToCreateGame}>Create Game</Button>
        <br />
        <Button fluid size={'massive'} color="blue" onClick={goToJoinGame}>Join Game</Button>
      </Segment>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

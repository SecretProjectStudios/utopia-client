import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid, Header, Segment, Container } from 'semantic-ui-react'
import * as Actions from './actions'
import { pickAColour } from '../util/pickAColour'

const MainMenu = ({ goToCreateGame, goToJoinGame }) => {
  const styles = {
    rowSpacer: {
      marginBottom: '20px',
    },
  }

  return (
    <Container>
      <Segment inverted color={pickAColour()} size={'massive'}>
        <Header size={'huge'} textAlign={'center'}>Utopia</Header>
      </Segment>
      <Segment>
        <Grid columns={1}>
          <Grid.Column>
            <Grid.Row style={styles.rowSpacer}>
              <Button fluid size={'massive'} color="green" onClick={goToCreateGame}>Create Game</Button>
            </Grid.Row>
            <Grid.Row>
              <Button fluid size={'massive'} color="blue" onClick={goToJoinGame}>Join Game</Button>
            </Grid.Row>
          </Grid.Column>
        </Grid>
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

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid } from 'semantic-ui-react'
import * as Actions from './actions'

const MainMenu = ({ goToCreateGame, goToJoinGame }) => {
  const styles = {
    rowSpacer: {
      marginBottom: '20px',
    },
  }
  return (
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

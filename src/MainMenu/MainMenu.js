import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid } from 'semantic-ui-react'

const MainMenu = () => {
  const styles = {
    rowSpacer: {
      marginBottom: '20px',
    },
  }
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Grid.Row style={styles.rowSpacer}>
          <Button fluid size={'massive'} color="green">Create Game</Button>
        </Grid.Row>
        <Grid.Row>
          <Button fluid size={'massive'} color="blue">Join Game</Button>
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

export default connect(mapStateToProps)(MainMenu)

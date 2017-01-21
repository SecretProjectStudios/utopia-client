import React from 'react'
import { Button, Header, Grid } from 'semantic-ui-react'

const MainMenu = () => {
  const styles = {
    row: {
      margin: '20px 0px',
    },
  }
  return (
    <Grid container columns={1}>
      <Grid.Column>
        <Grid.Row>
          <Header size={'huge'} textAlign={'center'}>Council</Header>
        </Grid.Row>
        <Grid.Row style={styles.row}>
          <Button fluid size={'massive'} color="green">Create Game</Button>
        </Grid.Row>
        <Grid.Row>
          <Button fluid size={'massive'} color="blue">Join Game</Button>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  )
}
export default MainMenu

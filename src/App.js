import React, { Component } from 'react'
import { Container, Card } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Card centered={true}>
            <Card.Content>
              <Card.Header>
                Card
              </Card.Header>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;

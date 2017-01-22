import React from 'react'
import { List, Segment, Label, Icon } from 'semantic-ui-react'

const PlayerList = ({ players }) => {
  const playerList = players || []
  return (
    <Segment textAlign="center">
      <List horizontal>
        {playerList.map((player) => {
          return (
            <List.Item key={`${player._id}`}>
              <List.Content>
                <Label size="large" color={player.voted ? 'green' : 'red'}><Icon name="user" />{player.name}</Label>
              </List.Content>
            </List.Item>
          )
        },
        )}
      </List>
    </Segment>
  )
}
export default PlayerList

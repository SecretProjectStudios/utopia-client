import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const PlayerList = ({ players }) => {
  const playerList = players || []
  return (
    <Segment>
      <List relaxed horizontal>
        <List.Header>Players</List.Header>
        {playerList.map((player) => {
          return (
            <List.Item key={`${player._id}`}>
              <List.Icon name={'user'} />
              <List.Content>
                {player.name}
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

import React from 'react'
import { List, Sidebar } from 'semantic-ui-react'

const PlayerList = ({ players }) => {
  return (
    <Sidebar animation="overlay" width="thin" visible vertical inverted>
      <List relaxed size={'massive'}>
        <List.Header>Players</List.Header>
        {players.map((player) => {
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
    </Sidebar>
  )
}
export default PlayerList

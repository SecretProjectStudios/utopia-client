import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const SectionHeader = ({ header, colour }) => (
  <Segment inverted color={colour} size={'massive'} padded>
    <Header size={'massive'} textAlign={'center'}>{header}</Header>
  </Segment>
)
export default SectionHeader

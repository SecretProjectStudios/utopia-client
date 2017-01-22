import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const SectionHeader = ({ header, colour }) => (
  <Segment inverted color={colour} size={'huge'} padded>
    <Header size={'huge'} textAlign={'center'}>{header}</Header>
  </Segment>
)
export default SectionHeader

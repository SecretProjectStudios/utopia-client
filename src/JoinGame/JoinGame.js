import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

const JoinGame = ({ reference }) => {
  return (
    <div>{reference}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps.params,
  }
}

export default connect(mapStateToProps)(JoinGame)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Root extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="root-container">
        <h1>React/Redux starter project</h1>
        { this.props.children }
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node
}
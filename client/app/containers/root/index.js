import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCompanies } from '../../core/companies/actions'
import { getEmployees } from '../../core/employees/actions'


class Root extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.preloadData()
  }

  render(){
    return (
      <section>
        { this.props.children }
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    preloadData: () => {
      dispatch(getCompanies())
      dispatch(getEmployees())
    }
  }
}

export default connect(null, mapDispatchToProps)(Root)
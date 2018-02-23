import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmployee } from '../../core/employees/actions'

class EmployeeItem extends Component {
  render(){
    return (
      <div>
        {this.props.employee.name}
        <button onClick={() => {this.props.assignEmployee(this.props.employee, null)}}>Assign</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignEmployee: (employee, company) => { dispatch(updateEmployee(employee.id, employee.name, 1 /*todo, use real value*/)) }
  }
}

export default connect(null, mapDispatchToProps)(EmployeeItem)
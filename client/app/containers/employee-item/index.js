import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmployee } from '../../core/employees/actions'

class EmployeeItem extends Component {
  render(){
    return (
      <div className="table-item">
        <div className="employee-list padded">
          <div className="employee-item">
            <p>{this.props.employee.name}
              <span className="clickable" onClick={() => {this.props.assignEmployee(this.props.employee, null)}}>
                <b>Assign</b>
              </span>
            </p>
          </div>
        </div>
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
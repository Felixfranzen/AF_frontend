import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateEmployee } from '../../core/employees/actions'

class CompanyAccordion extends Component {

  constructor(){
    super()
    this.state = {
      open: false
    }
  }

  clearEmployee(employee){
    this.props.clearEmployee(employee)
  }

  renderEmployees(){
    if (!this.state.open){
      return
    }

    let content = null

    if (this.props.employees.length === 0){
      content = (
        <div className="employee-item">
          <p>No employees</p>
        </div>
      )
    } else {
      content = this.props.employees.map((employee) => {
        return (
          <div className="employee-item" key={employee.id}><p>{employee.name}<span className="clickable" onClick={() => this.clearEmployee(employee) }>X</span></p></div>
        )
      })
    }

    return (
      <div className="employee-list">
        { content }
      </div>
    )
  }

  render(){
    return (
      <div className="table-item">
        <div className="header clickable" onClick={() => this.setState({ open: !this.state.open })}>
          <b>{this.props.company.name}</b><span className={this.state.open ? 'open caret' : 'caret'}>V</span>
        </div>
        {this.renderEmployees()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearEmployee: (employee) => { dispatch(updateEmployee(employee.id, employee.name, null) )}
  }
}

export default connect(null, mapDispatchToProps)(CompanyAccordion)
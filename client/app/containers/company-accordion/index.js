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

    if (this.props.employees.length === 0){
      return <div>No employees</div>
    }

    return this.props.employees.map((employee) => {
      return <div key={employee.id}>{employee.name} <button onClick={() => this.clearEmployee(employee) }>Remove</button></div>
    })
  }

  render(){
    return <div>
      <hr/>
      <div>
        <b>{this.props.company.name}</b><button onClick={() => this.setState({ open: !this.state.open })}>V</button>
      </div>
      {this.renderEmployees()}
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearEmployee: (employee) => { dispatch(updateEmployee(employee.id, employee.name, null) )}
  }
}

export default connect(null, mapDispatchToProps)(CompanyAccordion)
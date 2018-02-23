import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createEmployee } from '../../core/employees/actions'
import Dropdown from '../../components/dropdown/index'
import EmployeeItem from '../employee-item/index'

class EmployeeList extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      company: null
    }
  }

  setCompanyDropdown(){
    return this.props.companies.map((comp) => {
      return {
        name: comp.name,
        value: comp.id
      }
    })
  }

  onSubmitClicked(e){
    const trimmed = this.state.name.trim()
    if (trimmed.length === 0){
      return
    }

    this.props.createEmployee(trimmed, this.state.company || null)
    this.setState({ name: '', company: null })
  }

  renderEmployees(){
    return this.props.employees.map((emp) => {
      return (
        <EmployeeItem key={emp.id} employee={emp} />
      )
    })
  }


  render(){
    return (<section>
      <form onSubmit={(e) => e.preventDefault() }>
        <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.currentTarget.value })}}/>
        <Dropdown items={this.setCompanyDropdown()} onSelect={(id) => { this.setState({company: id}) }}/>
        <button type="submit" onClick={(e) => this.onSubmitClicked(e)}>Create company</button>
      </form>
      {this.renderEmployees()}
    </section>)
  }
}

const mapStateToProps = ({ companies, employees }) => {
  return {
    companies,
    employees: employees.filter((emp) => {
      return emp.company_id === null
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEmployee: (name, companyId) => { dispatch(createEmployee(name,companyId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
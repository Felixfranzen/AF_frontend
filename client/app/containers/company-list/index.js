import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createCompany } from '../../core/companies/actions'
import CompanyAccordion from '../company-accordion/index'

class CompanyList extends Component {

  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  onSubmitClicked(e){
    const trimmed = this.state.name.trim()
    if (trimmed.length === 0){
      return
    }

    this.props.createCompany(trimmed)
    this.setState({ name: '' })
  }

  renderCompanies(){
    if (!this.props.companies) {
      return <div>No companies yet</div>
    }

    return this.props.companies.map((company) => {
      const emp = this.props.employees.filter((e) => e.company_id === company.id)
      return <CompanyAccordion key={company.id} company={company} employees={emp} />
    })
  }

  render(){
    return (<section>
      <form onSubmit={(e) => e.preventDefault() }>
        <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.currentTarget.value })}}/>
        <button type="submit" onClick={(e) => this.onSubmitClicked(e)}>Create company</button>
      </form>
      {this.renderCompanies()}
    </section>)
  }
}

const mapStateToProps = ({ companies, employees }) => {
  return {
    companies,
    employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCompany: (name) => { dispatch(createCompany(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
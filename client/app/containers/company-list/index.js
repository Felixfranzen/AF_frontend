import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getCompanies, createCompany } from '../../core/companies/actions'

class CompanyList extends Component {

  componentWillMount(){
    this.props.getCompanies()
  }

  renderCompanies(){
    if (!this.props.companies) {
      return <div>No companies yet</div>
    }

    return this.props.companies.map((company) => {
      return (<div key={company.id}>
        <span>{company.name}</span><Link to={`/companies/${company.id}`}>SHOW</Link>
      </div>)
    })
  }

  render(){
    return (<section>
      {this.renderCompanies()}
    </section>)
  }
}

const mapStateToProps = ({ companies }) => {
  return {
    companies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: () => {  dispatch(getCompanies()) },
    createCompany: (name) => { dispatch(createCompany(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
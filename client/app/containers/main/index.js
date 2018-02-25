import React, { Component } from 'react'
import EmployeeList from '../employee-list/index'
import CompanyList from '../company-list/index'

export default class MainApp extends Component{
  render(){
    return (
      <section className="root-container">
        <div className="content">
          <CompanyList />
        </div>
        <div className="content">
          <EmployeeList />
        </div>
      </section>
    )
  }
}

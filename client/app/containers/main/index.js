import React, { Component } from 'react'
import EmployeeList from '../employee-list/index'
import CompanyList from '../company-list/index'

export default class MainApp extends Component{
  render(){
    return (
      <div>
        <EmployeeList />
        <hr></hr>
        <CompanyList />
      </div>
    )
  }
}

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import CompanyList from './containers/company-list/index'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={CompanyList} />
  </Route>
)
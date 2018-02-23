import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from './containers/root/index'
import MainApp from './containers/main/index'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={MainApp} />
  </Route>
)
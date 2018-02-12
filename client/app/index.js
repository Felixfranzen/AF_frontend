import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './routes.js'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers.js'

import './main.scss'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.querySelector('#container'))
import { combineReducers } from 'redux'
import companies from './core/companies/reducers'
import employees from './core/employees/reducers'

const rootReducer = combineReducers({
  companies,
  employees
})

export default rootReducer
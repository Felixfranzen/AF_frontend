import axios from 'axios'
import { GET_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE } from './constants'

export function getEmployees(){
  return (dispatch, getState) => {
    axios.get(`${API_URL}/employees`).then((result) => {
      dispatch({
        type: GET_EMPLOYEES,
        payload: result.data || []
      })
    })
  }
}

export function createEmployee(name, companyId){
  return (dispatch, getState) => {
    axios.post(`${API_URL}/employees`, { name, company_id: companyId }).then((result) => {
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: result.data
      })
    })
  }
}


export function updateEmployee(id, name, companyId){
  return (dispatch, getState) => {
    axios.put(`${API_URL}/employees/${id}`, { name, company_id: companyId }).then((result) => {
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: result.data
      })
    })
  }
}
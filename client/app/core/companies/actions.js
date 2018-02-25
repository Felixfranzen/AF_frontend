import axios from 'axios'
import { GET_COMPANIES, CREATE_COMPANY } from './constants'

export function getCompanies(){
  return (dispatch, getState) => {
    axios.get(`${API_URL}/companies`).then((result) => {
      dispatch({
        type: GET_COMPANIES,
        payload: result.data || []
      })
    })
  }
}

export function createCompany(name){
  return (dispatch, getState) => {
    axios.post(`${API_URL}/companies`, { name }).then((result) => {
      dispatch({
        type: CREATE_COMPANY,
        payload: result.data
      })
    })
  }
}
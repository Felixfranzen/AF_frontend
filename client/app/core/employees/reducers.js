import { GET_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE } from './constants'

export default (state = [], action) => {
  switch (action.type){
    case GET_EMPLOYEES:
      return action.payload

    case CREATE_EMPLOYEE:
      return [ ...state, action.payload ]

    case UPDATE_EMPLOYEE:
      return state.map((employee) => {
        if (action.payload.id === employee.id){
          return action.payload
        }

        return employee
      })

    default:
      return state
  }
}
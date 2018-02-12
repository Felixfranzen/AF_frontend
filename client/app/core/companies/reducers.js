import { GET_COMPANIES, CREATE_COMPANY } from './constants'

export default (state = [], action) => {
  switch (action.type){
    case GET_COMPANIES:
      return action.payload

    case CREATE_COMPANY:
      return [ ...state, action.payload ]

    default:
      return state
  }
}
import { GET_ALL_ADS, GET_AD, CREATE_AD  } from '../actions/products'

export default function(state = {}, action) {
  switch (action.type) {
  case GET_ALL_ADS:
    return action.payload
  case GET_AD:
    return {
      product:
      action.payload
    }
  case CREATE_AD:
    return action.payload
  default:
    return state
  }
}



import {LOGIN_STATUS} from '../actions/types'

const INITIAL_STATE = {
    login: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case LOGIN_STATUS:
        return {
            ...state,
            login: action.payload
        }
      default:
        return state
    }
}
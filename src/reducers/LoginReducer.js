const INITIAL_STATE = {
    login: ''
}

export default (state = INITIAL_STATE, action) => {
    // console.log(state, 'state')
    switch(action.type) {
      case 'LOGIN_STATUS':
        // console.log(action, state, 'ggg')
        return {
            ...state,
            login: action.payload
        }
      default:
        // console.log(action, 'ffff')
        return state
    }
}
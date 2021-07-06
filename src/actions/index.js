import {LOGIN_STATUS} from './types'

export const loginStatus = (status) => {
    return {
        type: LOGIN_STATUS,
        payload: status
    }
}
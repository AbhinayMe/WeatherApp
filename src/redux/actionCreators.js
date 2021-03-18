import * as actionTypes from './actionTypes'

export const setLocation = location => {
    return {
        type: actionTypes.SET_LOCATION,
        payload: location
    }
}

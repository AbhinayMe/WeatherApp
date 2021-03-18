import * as actionTypes from './actionTypes'

const initState = {
    token: 'ff9f895b2e884d6680530135202710',
    location: 'Kuala Lumpur',
    temp_c: '',
    temp_f: ''
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            }

        default:
            return state;
    }
}
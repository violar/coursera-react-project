import * as ActionTypes from './ActionTypes';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_PROMOS:
                return {...state, isLoading: false, errMess: null, promotions: action.payload}

            case ActionTypes.PROMOS_LOADING:
                return {...state, isLoading: true, errMess: null, promotions: []}

            case ActionTypes.PROMOS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, promotions: []}

            default: 
                return state;
        }
}


import * as ActionTypes  from './ActionTypes';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.LEADERS_LOADING:
                return {...state, isLoading: true, errMess: null, leaders: []}

            case ActionTypes.LEADERS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, leaders: []}

            case ActionTypes.ADD_LEADERS:
                return {...state, isLoading: false, errMess: null, leaders: action.payload}

            default: 
                return state;
        }
}
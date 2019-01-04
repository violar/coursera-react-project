import * as ActionTypes from './ActionTypes';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: [] 
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}

        default: 
            return state;
    }
}
import { PROMOTIONS } from '../shared/promotions';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}


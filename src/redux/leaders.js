import { LEADERS } from '../shared/leaders';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Leaders = (state = LEADERS, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}


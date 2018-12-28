import { DISHES } from '../shared/dishes'; 

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
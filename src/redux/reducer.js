import { DISHES } from '../shared/dishes'; 
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS
};


//returns new state, does not modify the current state
//set default state to be used if no state is initially provided
export const Reducer = (state = initialState, action) => {
    return state;
}
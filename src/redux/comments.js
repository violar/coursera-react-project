import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            //concat pushes new state object into array, cannot mutate current state
            return state.concat(comment)
            
        default: 
            return state;
    }
}
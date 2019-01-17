import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// takes current state(assign a default state if none is provided) and an action that needs to take place
// returns new state
export const Comments = (state = {
        errMess: null,
        comments: []    
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADD_COMMENTS:
                return { ...state, isLoading: false, errMess: null, comments: action.payload }

            case ActionTypes.COMMENTS_FAILED:
                return { ...state, isLoading: false, errMess: action.payload, comments: [] }

            case ActionTypes.ADD_COMMENT:
                var comment = action.payload;
                comment.id = state.comments.length;
                comment.date = new Date().toISOString();
                console.log("Comment: ", comment);
                //concat pushes new state object into array, cannot mutate current state
                return {...state, comments: state.comments.concat(comment)}
                
            default: 
                return state;
        }
}
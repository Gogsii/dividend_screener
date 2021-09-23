/*a reducer is a function that accepts the state and the action
//based on the action type it does some logic
//in reducers the state always must be initialized to something
//our 'state' will always be post, because we are in the posts reducer
//so can just put posts as the state
*/

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
const posts = (posts = [], action) => {

    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post ); //in this case the payload is the newly Updated post, otherwise return non-Updated post
        case DELETE:
            return posts.filter((post) => post._id !== action.payload); //keep all the posts, except for the one that is equal to the id we want to delete
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post ); //check which post changed/liked, return the changed post, or if no like, return post as it was
        default:
            return posts;
    }
}

export default posts;

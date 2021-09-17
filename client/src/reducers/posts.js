/*a reducer is a function that accepts the state and the action
//based on the action type it does some logic
//in reducers the state always must be initialized to something
//our 'state' will always be post, because we are in the posts reducer
//so can just put posts as the state
*/

//maybe you'll have to change this back to export default nameless and remove the const and post
const posts = (posts = [], action) => {

    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];    
        default:
            return posts;
    }
}

export default posts;

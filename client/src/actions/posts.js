//this is the action dispatched in App.js with
//  useEffect( () => { dispatch( getPosts() ); }, [dispatch] );

import * as api from '../api'; //import everything from the actions as api

//Action Creators + Redux Thunk for asynchronous data
//const action = { type: 'FETCH_ALL', payload: [] } //payload is the data, i.e. where all the posts are stored

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); //using the appi here to wait for a response asynchronously
        dispatch( { type: 'FETCH_ALL', payload: data } ); //with redux thunk it is this, instead of 'return action;'
    } catch (error) {
        console.log(error.message);
    }



    
    
};
//these are the actions dispatched in App.js with
//  useEffect( () => { dispatch( getPosts() ); }, [dispatch] );

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api'; //import everything from the actions as api

//Action Creators + Redux Thunk for asynchronous data
//const action = { type: 'FETCH_ALL', payload: [] } //payload is the data, i.e. where all the posts are stored


//GET POST ACTION
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

//CREATE POST ACTION
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

//UPDATE POST ACTION
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); //this is returning the updated post as a response, we then destructure the response and get the data
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error); //console logging just the error instead of error.message will give you more info
    }
}

//DELETE POST ACTION
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id); //no destructuring data since we're not interested in the returned data, we're just deleting the post when recieved
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error); //console logging just the error instead of error.message will give you more info
    }
}

//LIKE POST ACTION
//to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id); //
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error); //console logging just the error instead of error.message will give you more info
    }
}
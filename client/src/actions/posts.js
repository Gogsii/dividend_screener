// these are the actions dispatched in App.js with
// useEffect( () => { dispatch() }, [dispatch] );
// by themselves they don't do much, you have to go into the reducers and add the logic for them

import { FETCH_POST, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api'; //import everything from the actions as api

//GET SINGLE POST ACTION
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id); //this is where we're receiving the data from the backend
            
        dispatch({ type: FETCH_POST, payload: data }); //this is where we're sending the payload to the reducers
    } catch (error) {
        console.log(error.message);
    }
};

//GET ALL POSTS ACTION 
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
        
        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};

//GET POST BY SEARCHING
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        //have to destructure the data twice
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery); // first time because we're making an axios request, and the second because we put it in a new object that has the data property

        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};

//CREATE POST ACTION
export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(post);
        
        dispatch({ type: CREATE, payload: data });

        history.push(`/posts/${data._id}`);
    } catch (error) {
        console.log(error);
    }
};

//UPDATE POST ACTION
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post); //this is returning the updated post as a response, we then destructure the response and get the data
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message); //console logging just the error instead of error.message will give you more info
    }
};

//DELETE POST ACTION
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id); //no destructuring data since we're not interested in the returned data, we're just deleting the post when recieved
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error); //console logging just the error instead of error.message will give you more info
    }
};

//LIKE POST ACTION
//to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)
export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
        const { data } = await api.likePost(id, user?.token); //
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message); //console logging just the error instead of error.message will give you more info
    }
};
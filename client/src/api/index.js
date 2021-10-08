import axios from 'axios';

const API = axios.create({ baseURL: 'https://dividend-screener.herokuapp.com' });

//adding something specific to each one of our requests, sending the token to the backend middleware for authentication
//with this our backend can get access to the specific header and decode the data, we're sending the token to the backend to verify that we are actually logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) { //this is where the token is stored, in the profile
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req; //must return the initial request so that we are able to return all the subsequent requests below
});

//const url = 'http://localhost:3001/posts'; //this is when testing on home comp
//const url = 'https://dividend-screener.herokuapp.com/posts';

//very important to remember to export these
//this is the point at which we communicate with the backend
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`); //passing the data to the backend just so we know which page we're currently on
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none' }&tags=${searchQuery.tags}`); //with this, we are sending all of the search info to the search endpoint
export const createPost = (newPost) => API.post('/posts', newPost); 
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); //to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); //we now have the defined url, but also passing in the id to update
export const deletePost = (id) => API.delete(`/posts/${id}`); //we now have the defined url, but also passing in the id to update

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
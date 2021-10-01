import axios from 'axios';

const API = axios.create({ baseUrl: 'http://localhost:3001' });

//this is the url pointing to our frontend route, obv its localhost now
//as its currently setup localhost 3000 just returns all the posts we have in the database

//const url = 'http://localhost:3001/posts'; //this is when testing on home comp

//const url = 'https://dividend-screener.herokuapp.com/posts';

export const fetchPosts = () => API.get('/posts'); //very important to remember to export
export const createPost = (newPost) => API.post('/posts', newPost); 
export const likePost = (id) => API.patch(`/posts/${id}/likePost`); //to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); //we now have the defined url, but also passing in the id to update
export const deletePost = (id) => API.delete(`/posts/${id}`); //we now have the defined url, but also passing in the id to update

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
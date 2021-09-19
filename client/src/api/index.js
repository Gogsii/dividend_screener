import axios from 'axios';

//this is the url pointing to our frontend route, obv its localhost now
//as its currently setup localhost 3000 just returns all the posts we have in the database
const url = 'http://localhost:3001/posts'; 

export const fetchPosts = () => axios.get(url); //very important to remember to export
export const createPost = (newPost) => axios.post(url, newPost); 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost) //we now have the defined url, but also passing in the id to update
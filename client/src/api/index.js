import axios from 'axios';

//this is the url pointing to our backend route, obv its localhost now
//as its currently setup localhost 5000 just returns all the posts we have in the database
const url = 'http://localhost:5000/posts'; 

export const fetchPosts = () => axios.get(url); //very important to remember to export
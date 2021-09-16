//this is the component that fetches the data from the global Redux store and presents it to the user

import React from "react";
import { useSelector } from 'react-redux'; //lets us tap into the store
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector( (state) => state.posts ); //initialized as a hook
    const classes = useStyles();

    console.log(posts);

    return (
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    )
}

export default Posts;
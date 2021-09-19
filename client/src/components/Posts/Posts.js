//this is the component that fetches the data from the global Redux store and presents it to the user

import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'; //lets us tap into the store

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts); //initialized as a hook
    const classes = useStyles();

    console.log(posts);

    //because we're mapping withing the 'real' posts, we can send individual value of post to each post component
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alginItems="stretch" spacing={3}>
                { posts.map((post) => (
                    <Grid key={ post.id} item xs={12} sm={6}>
                        <Post post={ post } setCurrentId={ setCurrentId } /> {/*sending in post and setCurrentID as props via props drilling*/}
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;
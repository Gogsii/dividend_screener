//this is also where we are dealing with the update logic

import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);    //we don't want to fecth data for all the posts, only for the post being updated
    const classes = useStyles();    //setting classes to equal material ui's styling
    const dispatch = useDispatch(); //setting up dispatch from redux to be able to dispacth actions

    useEffect(() => {               //the second parameter asks when should the callback be ran, when what changes?
        if(post) {
            setPostData(post);
        }
    }, [post])         

    const handleSubmit = (e) => {   //Functions for form submission and clearing of form
        e.preventDefault();         //prevent refreshing of browser
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear(); //clears the form whether the user submits new stock or edits and existing
    };
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    };

    //what the form looks like on the frontend
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Stock</Typography>
                    <TextField 
                        name='creator' 
                        variant='outlined'
                        label='Creator' 
                        fullWidth
                        value={postData.creator}
                        onChange={ (e) => setPostData({ ...postData, creator: e.target.value }) }
                    />
                    <TextField 
                        name='title' 
                        variant='outlined'
                        label='Title' 
                        fullWidth
                        value={postData.title}
                        onChange={ (e) => setPostData({ ...postData, title: e.target.value }) }
                    />
                    <TextField 
                        name='message' 
                        variant='outlined'
                        label='Message' 
                        fullWidth
                        value={postData.message}
                        onChange={ (e) => setPostData({ ...postData, message: e.target.value }) }
                    />
                    <TextField 
                        name='tags' 
                        variant='outlined'
                        label='Tags' 
                        fullWidth
                        value={postData.tags}
                        onChange={ (e) => setPostData({ ...postData, tags: e.target.value }) }
                    />
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    type='submit'
                    fullWidth>Submit</Button>
                <Button 
                    variant='contained' 
                    color='secondary' 
                    size='small'
                    onClick={clear}
                    fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
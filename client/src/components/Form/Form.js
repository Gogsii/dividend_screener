//this is also where we are dealing with the update logic
import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/posts';

import FileBase from 'react-file-base64';
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    });
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));    //we don't want to fecth data for all the posts, only for the post being updated
    const dispatch = useDispatch(); //setting up dispatch from redux to be able to dispacth actions
    const classes = useStyles();    //setting classes to equal material ui's styling
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: [], selectedFile: '' });
      };

    useEffect(() => { //the second parameter [post] asks when should the callback be ran, when what changes?
        if (!post?.title) clear();
        if (post) setPostData(post);
    }, [dispatch, post]);

    const handleSubmit = async (e) => {   //Functions for form submission and clearing of form
        e.preventDefault();         //prevent refreshing of browser
        
        if(currentId) {
            dispatch(updatePost({ ...postData, name: user?.result?.name }, history));
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clear(); //clears the form whether the user submits new stock or edits and existing
    };

    //shows the below msg if no user is logged in
    if(!user?.result?.name) {
        return(
            <Paper className={classes.paper} elevation={6}>
                <Typography variant='h6' align='center'>
                    Please sign in to build your own dividend screener.
                </Typography>
            </Paper>
        );
    };

    const handleAddTag = (tag) => {
        setPostData({ ...postData, tags: [...postData.tags, tag] });
      };
    
      const handleDeleteTag = (tagToDelete) => {
        setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== tagToDelete) });
      };
      
    //what the form looks like on the frontend
    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Stock</Typography>
                    {/*<TextField name='creator' variant='outlined' label='Creator'  fullWidth value={postData.creator}  onChange={ (e) => setPostData({ ...postData, creator: e.target.value }) }/> */}
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
                    <div style={{ padding: '5px 0', width: '94%' }}>
                    <ChipInput
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onAdd={(tag) => handleAddTag(tag)}
                        onDelete={(tag) => handleDeleteTag(tag)}
                    />
                    </div>
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
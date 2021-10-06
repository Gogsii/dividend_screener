import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { useHistory, useLocation } from 'react-router-dom'; //location is to know which page we are on currently and history is for re-navigation
import ChipInput from 'material-ui-chip-input'; //makes our tags pretty, especially when searching for multiple items

import Pagination from '../Pagination/Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from '../../styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null); //sets the state of current ID to be null if no ID is selected
    const classes = useStyles();
    const dispatch = useDispatch(); //hook used to dipatch actions
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState(''); //setting an empty string as the default value for the search bar
    const [tags, setTags] = useState([]); //setting it to an empty array to account for multiple tags

  
    //a way to actually dispatch the action, similar to componentDidMount, componentDidUpdate and componentWillUpdate 
    //we're telling react to run this “effect” function after flushing changes to the DOM.
    //effects are ran after every render, including the first
    useEffect( () => {
      dispatch( getPosts() ); //dispatching the action created and exported in '/actions.posts'
    }, [currentId, dispatch] );

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) { //key code 13 means the Enter key on a keyboard
            //search for post
            
        }
    }

    const handleAdd = (tag) => setTags([ ...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter( (tag) => tag !== tagToDelete ));

    return (
    <Grow in>
        <Container maxwidth='xl' >
            <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <AppBar className={classes.appBarSearch} position='static' color='inherit' > 
                    <TextField 
                        name='search' 
                        variant='outlined' 
                        label='Search for a stock'
                        onKeyPress={handleKeyPress}
                        fullWidth
                        value={search}
                        onChange={ (e) => setSearch(e.target.value) } //allows user to change value of the search
                        />
                    <ChipInput 
                        style={{margin: '10px 0'}}
                        value={tags}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                        label= 'Search stock tickers'
                        variant='outlined'
                    />
                </AppBar>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                <Paper className={classes.pagination} elevation={6}>
                    <Pagination />
                </Paper>
            </Grid>    
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home;

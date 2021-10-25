import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import { useHistory, useLocation } from 'react-router-dom'; //location is to know which page we are on currently and history is for re-navigation
import ChipInput from 'material-ui-chip-input'; //makes our tags pretty, especially when searching for multiple items

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination/Pagination';
import Stocks from '../Stocks/Stocks';
import Stock from '../Stocks/Stock/Stock';

import useStyles from './styles';
import StockSearch from '../Stocks/Stock/StockSearch';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [currentId, setCurrentId] = useState(0); //sets the state of current ID to be null if no ID is selected
    const dispatch = useDispatch();  //hook used to dipatch actions
  
    const [search, setSearch] = useState(''); //setting an empty string as the default value for the search bar
    const [tags, setTags] = useState([]);  //setting it to an empty array to account for multiple tags
    const { stocks } = useSelector((state) => state.stocks); //initialized as a hook


    const history = useHistory();

    //function for searching POST by ticker and name
    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`); //changes the permalink to the account for the query and client-side routing
        } else {
            history.push('/'); //redirects to base, nothing was searched
        }
    };
    //runs function for searching POST by ticker and name upon pressing of Enter key
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) { //key code 13 means the Enter key on a keyboard
            //search for post
            searchPost();
        }
    }

    const handleAddTag = (tag) => setTags([ ...tags, tag]);
    const handleDeleteTag = (tagToDelete) => setTags(tags.filter( (tag) => tag !== tagToDelete ));

    return (
        
    <Grow in>
        <Container maxWidth='xl'>
            <Stocks />
            <Grid 
                container 
                justify='space-between' 
                alignItems='stretch' 
                spacing={3} 
                className={classes.gridContainer} 
            >
            <Grid item xs={12} sm={6} md={9}>
                {/* <Posts setCurrentId={setCurrentId}/> */}
            </Grid>

            {/* THIS IS FOR THE SEARCH POSTS BY NAME AND TICKER ORIGINAL FUNCTIONALITY ---------
                <Grid item xs={12} sm={6} md={3}>
                <AppBar className={classes.appBarSearch} position='static' color='inherit' > 
                    <TextField 
                        name='search' 
                        variant='outlined' 
                        label='Search for a stock'
                        onKeyDown={handleKeyPress}
                        fullWidth
                        value={search}
                        onChange={ (e) => setSearch(e.target.value) } //allows user to change value of the search
                        />
                    <ChipInput 
                        style={{margin: '15px 0'}}
                        value={tags}
                        onAdd={handleAddTag}
                        onDelete={handleDeleteTag}
                        label= 'Search stock tickers'
                        variant='outlined'
                    />
                    <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>Search</Button>
                </AppBar> 
            */}

                {/* THIS IS THE FORM TO SUBMIT AND EDIT POSTS WITH---------------------------
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        {( !searchQuery && !tags.length ) && (
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page}/>
                        </Paper>
                        )} 
                </Grid>
                */}
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home;

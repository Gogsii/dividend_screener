import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getStockBySearch } from '../../../actions/stocks';

import useStyles from './styles';
import { AppBar, Button, Grow, TextField } from '@material-ui/core/';
// import ChipInput from 'material-ui-chip-input'; //makes our tags pretty, especially when searching for multiple items

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const StockSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const searchQuery = query.get('searchQuery'); //DELETE this later if don't need it
   
  const [search, setSearch] = useState(''); //setting an empty string as the default value for the search bar

  //runs function for searching stocks by ticker and name upon pressing of Enter key
  const handleKeyPress = (e) => {
      if(e.keyCode === 13) { //key code 13 means the Enter key on a keyboard
          //search for post
          searchStock();
      }
  }

  //function for searching stocks by ticker and name
  const searchStock = () => {
      if (search.trim()) {
          search.toUpperCase();

          dispatch(getStockBySearch({ search }));

          history.push(`/stock/search?searchQuery=${search || 'none'}`); //changes the permalink
          
      } else {
          history.push('/'); //redirects to base, nothing was searched
      }
  };
  return (
    <Grow in>
      <AppBar className={classes.appBarSearch} position='static' color='inherit' > 
        {/* <TextField 
            name='search' 
            variant='outlined' 
            label='Search for a stock'
            onKeyDown={handleKeyPress}
            fullWidth
            value={search}
            // onChange={ (e) => setSearch(e.target.value) } //allows user to change value of the search
            /> */}
        <TextField
            // value={tags} <-- MAY NEED THIS FOR LATER
            // onAdd={handleAddTag}
            // onDelete={handleDeleteTag}
            name='search' 
            value={search}
            style={{margin: '15px 0'}}
            label= 'Search stock tickers'
            variant='outlined'
            onKeyDown={handleKeyPress}
            onChange={ (e) => setSearch(e.target.value.toLocaleUpperCase()) } //allows user to change value of the search
        />
        <Button className={classes.searchButton} onClick={searchStock} variant='contained' color='primary'>Search</Button>
    </AppBar>
    </Grow>
  )
}

export default StockSearch;

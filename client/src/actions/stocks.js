import { FETCH_STOCK_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';
import axios from 'axios';

/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
//GET SINGLE STOCK BY SEARCHING ACTION

export const getStockBySearch = (searchQuery) => async (dispatch) => { //the searchQuery is the stock ticker the user typed into the search bar
    dispatch({ type: START_LOADING });

    //API call info
    const ticker = {
        method: 'GET',
        url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
        params: {symbol: searchQuery.search}, //assigning the symbol to be the searchQuery the user typed into the searchbar
        headers: {
          'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
          'x-rapidapi-key': 'cbe0339db0msh2daae506a51a3a4p1940e3jsn1ebae4488c25'
        }
      };

    //SENDING an API call to Mboum Finance for the data
    await axios.request(ticker).then(function(response) {
      const stockInfo = response.data[0]; //assigning the 1st object of the response array to be the stockInfo

      dispatch({ type: FETCH_STOCK_BY_SEARCH, payload: stockInfo }); //sending the retrieved stockInfo to state

    }).catch(function (error) {
          console.error(error);
      });

    dispatch({ type: END_LOADING });
};

/*--------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------*/
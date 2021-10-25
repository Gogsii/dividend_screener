import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; //lets us tap into the store
import Stock from './Stock/Stock';
import StockSearch from './Stock/StockSearch';

import { Grid, Container, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Stocks = () => {
  const { stocks, isLoading } = useSelector((state) => state.stocks); //initialized as a hook

  const classes = useStyles();

  console.log(isLoading); // <-- for testing DELETE later on

  // if (!isLoading) return ''; //Maybe I can put in a news feed by default in here DELETE later if not needed

  return (
    <Container>
          { isLoading ? <CircularProgress /> : (stocks.length === 0 ?
          <StockSearch />
          :
          <>
          <Stock stockInfo={stocks} />
          <StockSearch />
          </>
          )}
    </Container>
    )
}

export default Stocks

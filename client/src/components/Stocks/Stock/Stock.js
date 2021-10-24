import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useLocation } from 'react-router-dom';

import {Card, CardContent, CardMedia, Grow, Typography, TextField } from '@material-ui/core/';
// import ChipInput from 'material-ui-chip-input'; //makes our tags pretty, especially when searching for multiple items
import useStyles from './styles';


const Stock = ({stockInfo}) => {
    const classes = useStyles();
    const apiDate = new Date(stockInfo.dividendDate.date);

    return (
        <Grow in>
            <Card className={classes.fullHeightCard}>
                    {/*I MAY WANT TO PUT AN IMAGE IN HERE*/}
                <CardContent>
                    <Typography variant='h4' style={{color: 'black'}}>HERE IS WHAT THE API FETCHED:</Typography>
                    <Typography style={{color: 'black'}}>Company Name: {stockInfo.shortName}</Typography>
                    <Typography style={{color: 'black'}}>Market Cap: ${stockInfo.marketCap.toLocaleString()}</Typography>
                    <Typography style={{color: 'black'}}>Current price: ${stockInfo.regularMarketPrice}</Typography>
                    <Typography style={{color: 'black'}}>Most Recent Dividend Date: {apiDate.toDateString()}</Typography>
                    <Typography style={{color: 'black'}}>Trailing Annual Dividend Rate: {stockInfo.trailingAnnualDividendRate}</Typography>
                    <Typography style={{color: 'black'}}>Trailing Annual Dividend Yield: {stockInfo.trailingAnnualDividendYield}</Typography>
                    <Typography style={{color: 'black'}}>Trailing P/E Ratio: {stockInfo.trailingPE}</Typography>

                </CardContent>
            </Card>
        </Grow>
    )
}

export default Stock;
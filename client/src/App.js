import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Forms';
import dividendstocks from './images/dividendstocks.jpg';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null); //sets the state of current ID to be null if no ID is selected
  const classes = useStyles();
  const dispatch = useDispatch(); //hook used to dipatch actions

  //a way to actually dispatch the action, initially its the componentDidMount, but then it turns into componentWillUpdate 
  useEffect( () => {
    dispatch( getPosts() ); //dispatching the action created and exported in '/actions.posts'
  }, [currentId, dispatch] );
  return (
    <Container maxwidth='lg'>
      <AppBar className={ classes.appBar} position='static' color='inherit'>
        <Typography className={ classes.heading } variant='h2' align='center'>Dividend Stock Screener</Typography>
        <img className={ classes.image } src={ dividendstocks } alt='logo' height='220' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>    
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
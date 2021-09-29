import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from '../../styles';


const Home = () => {
    const [currentId, setCurrentId] = useState(null); //sets the state of current ID to be null if no ID is selected
    const classes = useStyles();
    const dispatch = useDispatch(); //hook used to dipatch actions
  
    //a way to actually dispatch the action, initially its the componentDidMount, but then it turns into componentWillUpdate 
    useEffect( () => {
      dispatch( getPosts() ); //dispatching the action created and exported in '/actions.posts'
    }, [currentId, dispatch] );

    return (
    <Grow in>
        <Container>
            <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>    
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home;

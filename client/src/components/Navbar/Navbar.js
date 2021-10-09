import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

//import dividends_logo from '../../images/dividends_logo.jpg';
//import dividends_text from '../../images/dividends_text.jpg';

//import authReducer from '../../reducers/auth';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); //here we attempt to fetch the user from local storage and set it as the current state
    
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        setUser(null);

        return history.push('/auth');
    };

    //using useEffect to help navigate automatically instead of manually
    useEffect((logout, user) => {
        const token = user?.token;
        
        if (token) {
            const decodedToken = decode(token);
        
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]); //location here refers to url changing from /auth to just '/'

    return(
    <AppBar className={ classes.appBar } position='static' color='inherit'>
        <Link to='/' className={classes.brandContainer}>
            <Typography component={Link} to='/' className={ classes.heading } variant='h2' align='center'>Dividend Stock Screener</Typography>
           {/* <img src={ dividends_text } alt='icon' height='45px' /> */}
           {/* <img className={ classes.image } src={ dividends_logo } alt='icon' height='40px' /> */}
        </Link>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to='/auth' variant='contained' color='primary'>Log In</Button>
            )}
        </Toolbar>

    </AppBar>
    );
}

export default Navbar;

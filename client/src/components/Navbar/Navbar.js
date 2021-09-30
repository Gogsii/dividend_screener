import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
//import dividendstocks from '../../images/dividendstocks.jpg';
import authReducer from '../../reducers/auth';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); //here we attempt to fetch the user from local storage
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    //using use effect to help navigate automatically instead of manually
    useEffect(() => {
        const token = user?.token;
        // JWT... later on
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
    <AppBar className={ classes.appBar } position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography component={Link} to='/' className={ classes.heading } variant='h2' align='center'>Dividend Stock Screener</Typography>
           {/* <img className={ classes.image } src={ dividendstocks } alt='logo' height='220' /> */}
        </div>
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

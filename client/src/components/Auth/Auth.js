import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';


const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false); //setting default case to be not signed up

    const handleShowPassword = () => setShowPassword( (prevShowPassword) => !prevShowPassword) //this toggles the show pw on/off

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {
        (setIsSignup( (prevIsSignup) => !prevIsSignup )); //switches the state on/off like a switch
        handleShowPassword(false); //resets the show password when switching between signup/signin
    };  

    const googleSuccess = async (res) => {
        //special optional chaining operator ?. is not going to throw an error if we don't have access to the res object
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({type: 'AUTH', data: { result, token } }); //dispatching action type and payload
            history.push('/'); //navigate user back to home after logging in
        } catch (error) {
            console.log(error);
        }
        console.log(res);
    };

    //if sign up with google fails, return why
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try Again Later.')
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                            <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                            <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                        </>
                        )}
                        <Input name='email' label='Email Address' type='email' handleChange={handleChange} />
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange}/>
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' type='password' handleChange={handleChange}/> }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId='941971253122-02s9drkrmvukt8fha77buslca1u4g40u.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained' >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justify='flex-end'>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;

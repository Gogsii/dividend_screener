import { AUTH } from '../constants/actionTypes';
import * as api from '../api'; //import everything from the actions as api

//
export const signin = (formData, history) => async(dispatch) => {
    try {
        //log user in

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

//
export const signup = () => async(dispatch) => {
    try {
        //sign user up

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
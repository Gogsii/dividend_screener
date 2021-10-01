import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js'; //import everything from the actions as api

//
export const signin = (formData, history) => async (dispatch) => {
    try {
        //log user in
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

//
export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign user up
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};
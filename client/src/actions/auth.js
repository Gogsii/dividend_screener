import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js'; //import everything from the actions as api

//
export const signin = (formData, router) => async (dispatch) => {
    try {
        //log user in
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
};

//
export const signup = (formData, router) => async (dispatch) => {
    try {
        //sign user up
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error.message);
    }
};
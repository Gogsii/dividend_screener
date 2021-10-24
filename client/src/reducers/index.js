import { combineReducers } from "redux";
import posts from './posts';
import stocks from './stock';
import auth from "./auth";


export default combineReducers({ stocks, posts, auth });
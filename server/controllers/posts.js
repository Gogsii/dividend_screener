// inside of here are all the handlers for the Routes. 
// once you create the routes in here you can go to the client side and initatie them in the api call 
// and then create an action for them in the action creator as well as an accompanying reducer
import express from 'express';

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

const router = express.Router();

//logic for loading all the posts
export const getPosts = async (req, res) => {
    const { page } = req.query; //comes from the query because we're passing it via the front end query
    try {
        const LIMIT = 4;
        const startIndex = (Number(page) - 1) * LIMIT; //get the starting index of every page
        const total = await PostMessage.countDocuments({}); //get the number of documents/posts in existence
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex); //gives the newest post first and limits the number of posts per page. then skip all previous pages and start at selected page
        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});//passing all this data back to the frontend

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//logic for searching the posts (Query (?query) vs. Params (/:param))
export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, 'i'); //take what the user typed in an ignore case, convert it to a regexp and set it as value for title variable
        
        // $or: -> means either/or, either find it in the title or in the tags
        // $in means is there a tag in this specific array of tags that matches our query
        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//logic for adding different posts
export const createPost = async (req, res) => {
    const post = req.body; //const body = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() }); //creates a new post from the mongoose model
    try {
        await newPostMessage.save(); //saves the newly created post
        res.status(201).json(newPostMessage); //sends the new post into the system
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//logic for updating single post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body; //this is where we recieve the data for the updates

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,  {...post, _id }, { new: true }); //find and update the post, then assign it to var updatedPost

    res.json(updatedPost); //sending over the updated post as response
}

//logic for deleting a single post
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id.');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully!' }); //sending over the updated post as response
}

//logic for liking a single post
//to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)
export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) {
        return res.json({ message: 'Unauthenticated' });
    } 

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`); //check if we have the post that the user wants to like
    
    const post = await PostMessage.findById(id); //this is how we find the post we're seeking to like

    const index = post.likes.findIndex((id) => id === String(req.userId)); //check to see if user id is already in the likes pile, if id found, it should be a dislike not a like

    if(index === -1) { //meaning the findIndex did not find the ID in the likes pile, it will be a like
        post.likes.push(req.userId);
    } else { //it will be a dislike or like removal
        post.likes = post.likes.filter( (id) => id !== String(req.userId) );
    }

    //this is the updated post result. with update rqsts we have to specify a 3rd parameter
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    
    res.json(updatedPost);
}

export default router;
//inside of here are all the handlers for the Routes

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

//logic for loading all the posts
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(req.headers);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//logic for adding different posts
export const createPost = async (req, res) => {
    const post = req.body; //const body = req.body;

    const newPost = new PostMessage(post); //creates a new post from the mongoose model
    try {
        await newPost.save(); //saves the newly created post
        res.status(201).json(newPost); //sends the new post into the system
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body; //this is where we recieve the data for the updates

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,  {...post, _id }, { new: true }); //find and update the post, then assign it to var updatedPost

    res.json(updatedPost); //sending over the updated post as response
}
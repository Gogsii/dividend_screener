//here we're creating the default properties our posts will contain, the skeleton for the post

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String, 
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//the above is a Schema, but it needs to get turned into a model, so we create a Model named PostMessage
const PostMessage = mongoose.model('PostMessage', postSchema);

//exorting a mongoose model, so that you can later on run CRUD commands on it
export default PostMessage;
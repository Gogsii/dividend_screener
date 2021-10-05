//this is step 1, when it comes to creating backend logic, declare the routers in here then go into controllers to define what they do

import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.p('/', auth, createPost);
router.patch('/ost:id', auth, updatePost); //dynamic because we need to know the ID of existing post before editing it
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost); //to implement abiilty to like post only once we need to implement accounts (full auth system registration login, accounts etc)


export default router;
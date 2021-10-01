import express from 'express';
const router = express.Router();

import { signin, signup } from '../controllers/user.js';

router.post('/signin', signin); //its a POST route because we're sending data (login form details) to the backend
router.post('/signup', signup);

export default router;
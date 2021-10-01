import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin); //its a POST route because we're sending data (login form details) to the backend
router.post('/signup', signup);

export default router;
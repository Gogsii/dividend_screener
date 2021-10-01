import bcrypt from 'bcrypt.js';
import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';
import User from '../models/user.js'

//logic for signing user in
export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }); //check and see if email exists in the database
        if(!existingUser) {
            return res.status(404).json({ message: 'User doesn\'t exist' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign( { email: existingUser.email, id: existingUser._id }, 'test',  );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//logic for signing up new user
export const signup = async (req, res) => {

    try {
        await 
        res.status(201).json(); //sends the new post into the system
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
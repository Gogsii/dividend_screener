import bcrypt from 'bcryptjs'; //used to hash the passwords
import jwt from 'jsonwebtoken'; //safe way to store users in browsers for some period of time

import User from '../models/user.js'

const secret = 'test';

//logic for signing user in
export const signin = async (req, res) => {
    const { email, password } = req.body; //whenever we have a POST request, we get all the data of the request body, here we destructure the email and pw

    try {
        const existingUser = await User.findOne({ email }); //check and see if email exists in the database
        if(!existingUser) {
            return res.status(404).json({ message: 'User doesn\'t exist' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); //check and see if typed password matches saved user pw
        
        if(!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign( { email: existingUser.email, id: existingUser._id }, secret, { expiresIn: '1hr' }); //2nd argument is a secret string, I'll have to create it and store in .env 
        
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong.' });
    }
}

//logic for signing up new user
export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) {
            return res.status(400).json({ message: 'User already exists, please login.' });
        }

        if(password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords don\'t match.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12) //2nd parameter, aka salt, is the level of difficulty to use in the hashing
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` }); 
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1hr' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong.' });

        console.log(error);
    }
}
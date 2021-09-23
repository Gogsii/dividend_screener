import express from 'express';
// import bodyParser from 'body-parser'; //this is optional, express comes with it out of the box now. 
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(express.urlencoded( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(cors());

app.use('/posts', postRoutes); //sets the permalink base to domain.com/posts/post

app.get('/', (req, res) => {
    res.send('Hello to Dividend Stocks API');
});

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`) ) )
    .catch( (error) => console.log( error.message ) );

//mongoose.set('useFindAndModify', false); //this is old

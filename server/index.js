import express from 'express';
import bodyParser from 'body-parser'; //this is optional, express comes with it out of the box now. 
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(bodyParser.urlencoded( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(cors());

app.use('/posts', postRoutes); //sets the permalink base to domain.com/posts/post

//gogsi pw: KvYrKBALh7fcmV2 dbName: DividendStocks
const CONNECTION_URL = 'mongodb+srv://gogsi:KvYrKBALh7fcmV2@dividendstocks.pjriy.mongodb.net/dividendstocks?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`) ) )
    .catch( (error) => console.log( error.message ) );

//mongoose.set('useFindAndModify', false); //this is old

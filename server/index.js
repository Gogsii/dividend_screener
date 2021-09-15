import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json( { limit: "100mb", extended: true } ) );
app.use(bodyParser.urlencoded( { limit: "100mb", extended: true } ) );
app.use(cors());

//gogsi pw: KvYrKBALh7fcmV2 dbName: DividendStocks
const CONNECTION_URL = 'mongodb+srv://gogsi:KvYrKBALh7fcmV2@cluster0.pjriy.mongodb.net/DividendStocks?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => app.listen( PORT, () => console.log(`Server running on port: ${PORT}`) ) )
    .catch( (error) => console.log( error.message ) );

import express from 'express'; //provide server-side logic for web and mobile applications, funnels incoming requests through a chain of middlewares
import dotenv from 'dotenv'; //zero-dependency module that loads environment variables from a .env file into process.env

// import bodyParser from 'body-parser'; //this is optional, express comes with it out of the box now. 
import mongoose from 'mongoose'; //MongoDB object modeling tool designed to work in an asynchronous environment.
import cors from 'cors'; //package for providing a Connect/Express middleware that can be used to enable CORS with various options.
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();
dotenv.config();

app.use(express.json( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(express.urlencoded( { limit: "100mb", extended: true } ) ); //could technically replace the word bodyParser with express if wanted
app.use(cors());

app.use('/posts', postRoutes); //sets the permalink base to domain.com/posts/post
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello to Dividend Stocks API');
});

//const PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log( error.message));
 
//mongoose.set('useFindAndModify', false); //this is outdated
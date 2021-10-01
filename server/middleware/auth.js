import jwt from "jsonwebtoken";

//next param just means 'do something and then move on to the next thing'
const auth = async ( req, res, next ) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test'); //gives us the data from each specific token, such as username and id
            req.userId = decodedData?.id; //storing user id into req.userId if working with our own token
        } else {
            decodedData = jwt.decode(token); //in this case we don't need the secret param
            req.userId = decodedData?.sub; //sub is googles name for specific user id that differentiates every google user
        }

        next(); //allows us to pass the action onto a second thing, or something else once the above passes
    } catch (error) {
        console.log(error);
    }
}

export default auth;
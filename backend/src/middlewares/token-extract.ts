//Imports
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

//Exports
module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_WORD);
        const userEmail = decodedToken.userEmail;
        request.auth = {
            userEmail: userEmail,
        };
        next();
    } catch (error) {
        response.status(401).json({ error });
    }
};

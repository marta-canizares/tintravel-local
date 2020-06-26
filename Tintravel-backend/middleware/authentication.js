import jwt from 'jsonwebtoken';
import HTTPerror from 'http-errors';
import userDAO from '../model/user/dao.js'
//recoger token de la request
//descodificar el token
//comprueba que el usuario existe
//NO DEVUELVE respuesta

const getTokenFrom = request => {
    const authorization = request.get('authorization');
    //console.log(authorization)

    if (authorization && authorization.toLowerCase().startsWith('bearer '))
        return authorization.substring(7);

    return null
}

const tokenVerify = async (token) => {

    const decodedToken = await jwt.verify(token, process.env.SECRET);

    return decodedToken;

};

const authUser = async (req, res, next) => {

    try {

        const token = getTokenFrom(req);

        const decodedToken = await tokenVerify(token);
        console.log(decodedToken)

        if (!token || !decodedToken.username) {
            next(HTTPerror(401, { error: 'token invalid or missed' }))
        } else {

            const user = await userDAO.listOneByName(decodedToken.username);


            user === null ? next(HTTPerror(401, { error: 'token does not match user' })) :
                next();
        }

    } catch (error) {
        next(error)
    }
}

export default authUser;
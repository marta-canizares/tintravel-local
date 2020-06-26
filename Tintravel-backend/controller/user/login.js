import usuarioDAO from '../../model/user/dao.js';
import bcrypt from 'bcrypt'
import HTTPError from 'http-errors';
import jwt from 'jsonwebtoken';

const login = async (req, res, next) => {

    try {
        const usuario = await usuarioDAO.listOneByName(req.body.username);
        //console.log(usuario);
        const passwordCorrecta = usuario === null ? false : await bcrypt.compare(req.body.password, usuario[0].password)

        if (!(usuario && passwordCorrecta)) {
            next(HTTPError(401, { mensaje: 'usuario o password incorrecto' }))
        } else {
            const usuarioToken = {
                username: usuario[0].username,
                id: usuario[0].id
            }
            console.log(usuarioToken)
            const token = await jwt.sign(usuarioToken, process.env.SECRET)

            res.status(201).json({ token, 'usuario': usuario[0].id });
        }

    } catch (error) {
        next(error);
    }
}

export default login;

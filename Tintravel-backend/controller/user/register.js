import bcrypt from 'bcrypt';
import usuarioDAO from '../../model/user/dao.js';

const register = async (req, res, next) => {

    try {

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
        console.log(passwordHash);

        const newUser = {
            username: req.body.username,
            password: passwordHash,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        }

        const usuario = await usuarioDAO.register(newUser)

        res.status(201).json(usuario);

    } catch (error) {
        next(error);
    }

}

export default register;
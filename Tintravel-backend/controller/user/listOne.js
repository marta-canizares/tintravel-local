import usuarioDAO from '../../model/user/dao.js';

const listOne = async (req, res, next) => {
    try {
        if (!req.params.id) {
            res.sendStatus(400);
        } else {
            const usuario = await usuarioDAO.listOne(Number(req.params.id));
            res.status(201).json(usuario);
        }

    } catch (error) {
        next(error);
    }
}


export default listOne;
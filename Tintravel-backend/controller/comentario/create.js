import comentarioDAO from '../../model/comentario/dao.js';

const create = async (req, res, next) => {

    try {

        const comentario = req.body;
        const insertId = await comentarioDAO.create(comentario);
        comentario.id = insertId;

        res.status(201).json(comentario);

    } catch (error) {
        next(error);

    }
}

export default create;
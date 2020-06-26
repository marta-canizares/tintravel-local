import comentarioDAO from '../../model/comentario/dao.js';

const removeOne = async (req, res, next) => {

    try {

        const comentarioId = req.params.id; // Busca el ID de la URL de la ruta /:id

        const affectedRows = await comentarioDAO.removeOne(comentarioId);

        res.status(201).json(affectedRows);

    } catch (error) {
        next(error);
    }
}

export default removeOne;
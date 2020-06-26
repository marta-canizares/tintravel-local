import usuarioDAO from '../../model/user/dao.js';

const removeOne = async (req, res, next) => {

    try {

        const userId = req.params.id; // Busca el ID de la URL de la ruta /:id

        const affectedRows = await usuarioDAO.removeOne(userId);

        res.status(201).json(affectedRows);

    } catch (error) {
        next(error);

    }
}

export default removeOne;
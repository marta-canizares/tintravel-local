import postDao from '../../model/post/dao.js';

const removeOne = async (req, res, next) => {

    try {

        const postId = req.params.id; // Busca el ID de la URL de la ruta /:id

        const affectedRows = await postDao.removeOne(postId);

        res.status(201).json(affectedRows);

    } catch (error) {
        next(error);

    }
}

export default removeOne;
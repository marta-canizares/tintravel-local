import postDao from '../../model/post/dao.js';

const updateOne = async (req, res, next) => {

    try {

        const postId = req.params.id; // Busca el ID de la URL de la ruta /:id
        const postData = req.body; // Busca los datos enviados en el body de la petición
        console.log(postId)
        console.log(postData)

        const affectedRows = await postDao.updateMeGusta(postId, postData);

        res.status(201).json(affectedRows);

    } catch (error) {
        next(error);

    }
}

export default updateOne;

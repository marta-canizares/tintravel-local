import postDao from '../../model/post/dao.js';

const list = async (req, res, next) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const posts = await postDao.list();

        res.status(201).json(posts);

    } catch (error) {
        next(error);

    }
}

export default list;
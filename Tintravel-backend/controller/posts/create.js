import postDao from '../../model/post/dao.js';

const create = async (req, res, next) => {

    try {

        const post = req.body;
        const insertId = await postDao.create(post);
        post.id = insertId;

        res.status(201).json(post);

    } catch (error) {
        next(error);

    }
}

export default create;
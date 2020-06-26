import postDao from '../../model/post/dao.js';

const listByContinente = async (req, res, next) => {

    try {
        console.log(req.params.continente)
        if (!req.params.continente) {
            res.sendStatus(400);
        } else {
            const post = await postDao.listByContinente(req.params.continente);
            console.log(post);
            res.status(201).json(post);
        }


    } catch (error) {
        next(error);
    }
}

export default listByContinente;
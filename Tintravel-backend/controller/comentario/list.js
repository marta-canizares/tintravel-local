import comentarioDAO from '../../model/comentario/dao.js';

const list = async (req, res, next) => {

    try {
        //  console.log(req.params.postid)
        if (!req.params.postid) {
            res.sendStatus(400);
        } else {
            const comentarios = await comentarioDAO.list(req.params.postid);;
            //console.log(comentarios);
            res.status(201).json(comentarios);
        }

    } catch (error) {
        next(error);
    }
}

export default list;


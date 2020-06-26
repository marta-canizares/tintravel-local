import postDao from '../../model/post/dao.js';
import path from 'path';


const uploadImage = async (req, res, next) => {

    try {
        const postId = req.params.idpost;
        const filename = req.file.originalname;
        console.log(req.file)
        const ext = path.parse(filename).ext;
        //console.log(req.file.path)

        if (ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif' || ext == '.JPG') {
            const resultado = await postDao.updateImg(postId, req.file.path)
            console.log(filename)
            res.status(201).json(resultado)

        }
        else {
            res.sendStatus(400);
        }
    }

    catch (error) {
        next(error);
    }

}


export default uploadImage;


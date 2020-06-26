import usuarioDAO from '../../model/user/dao.js';
import path from 'path';


const uploadImage = async (req, res, next) => {

    try {
        const userId = req.params.id;
        const filename = req.file.originalname;
        console.log(req.file)
        const ext = path.parse(filename).ext;
        //console.log(req.file.path)

        if (ext == '.png' || ext == '.jpg' || ext == '.jpeg' || ext == '.gif' || ext == '.JPG') {
            const resultado = await usuarioDAO.updateImg(userId, req.file.path)
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


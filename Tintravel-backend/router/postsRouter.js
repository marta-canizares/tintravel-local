import Router from 'express';
import authUser from '../middleware/authentication.js';
import create from '../controller/posts/create.js';
import list from '../controller/posts/list.js';
import removeOne from '../controller/posts/removeOne.js';
import updateOne from '../controller/posts/updateOne.js';
import listByContinente from '../controller/posts/listByContinente.js'
import uploadImage from '../controller/posts/updateFoto.js'
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/posts');
    },
    filename: function (req, file, cb) {
        // console.log('file', file);
        const ext = path.parse(file.originalname).ext.toLowerCase();
        // console.log('ext', ext)
        cb(null, file.originalname);
    },
});
const mul_upload = multer({ storage });




const router = Router();

router.use(authUser);

router.route('/')
    .get(list)
    .post(create)

router.route('/:id')
    .put(updateOne)
    .delete(removeOne)

router.route('/:continente')
    .get(listByContinente)

router.route('/upload-image-post/:idpost')
    .post([authUser, mul_upload.single('image')], uploadImage);




export default router;  
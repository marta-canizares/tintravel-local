import Router from 'express';
import authUser from '../middleware/authentication.js';
import register from '../controller/user/register.js'
import login from '../controller/user/login.js'
import listOne from '../controller/user/listOne.js'
import removeOne from '../controller/user/removeOne.js'
import uploadImage from '../controller/user/updateFoto.js'
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/users');
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

router.route('/registro')
    .post(register)

router.route('/login')
    .post(login)

router.route('/:id')
    .get(authUser, listOne)
    .delete(authUser, removeOne)

router.route('/upload-image-user/:id')
    .post([authUser, mul_upload.single('image')], uploadImage);






export default router;
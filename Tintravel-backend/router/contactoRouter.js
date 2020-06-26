import Router from 'express';
import create from '../controller/contacto/create.js';

const router = Router();


router.route('/')
    .post(create)




export default router;
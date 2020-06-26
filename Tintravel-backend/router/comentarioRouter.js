import Router from 'express';
import authUser from '../middleware/authentication.js';
import create from '../controller/comentario/create.js';
import list from '../controller/comentario/list.js';
import removeOne from '../controller/comentario/removeOne.js';


const router = Router();

router.use(authUser);

router.route('/')
    .get(list)
    .post(create) // no me funciona

router.route('/:id')
    .delete(removeOne)

router.route('/:postid')
    .get(list)






export default router;  
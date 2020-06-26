import Router from 'express';
import authUser from '../middleware/authentication.js';
import updatePerfil from '../controller/perfil/updatePerfil.js';



const router = Router();

router.use(authUser);

router.route('/:id')
    .put(updatePerfil)




export default router;  
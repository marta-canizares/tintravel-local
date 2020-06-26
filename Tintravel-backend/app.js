import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './router/userRouter';
import postsRouter from './router/postsRouter';
import perfilRouter from './router/perfilRouter';
import comentarioRouter from './router/comentarioRouter.js';
import errorRouter from './router/errorRouter.js'
import contactoRouter from './router/contactoRouter.js'

import manejoError from './middleware/manejo-error.js';


dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())


app.use('/user', userRouter);
app.use('/perfil', perfilRouter)
app.use('/posts', postsRouter)
app.use('/comentarios', comentarioRouter)
app.use('/contacto', contactoRouter)
app.use('/uploads', express.static(process.cwd() + '/uploads'))
app.use('*', errorRouter);



app.use(manejoError.logError);
app.use(manejoError.errorCliente);
app.use(manejoError.errorGenerico);


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

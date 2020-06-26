import contactoDAO from '../../model/contacto/dao.js';

const create = async (req, res, next) => {

    try {

        const contacto = req.body;
        const insertId = await contactoDAO.create(contacto);
        contacto.id = insertId;

        res.status(201).json(contacto);

    } catch (error) {
        next(error);

    }
}

export default create;
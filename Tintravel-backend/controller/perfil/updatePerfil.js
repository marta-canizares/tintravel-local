import perfilDAO from '../../model/perfil/dao.js';

const updatePerfil = async (req, res, next) => {

    try {

        const perfilId = req.params.id; // Busca el ID de la URL de la ruta /:id
        const perfilData = req.body; // Busca los datos enviados en el body de la petición

        const affectedRows = await perfilDAO.updatePerfil(perfilId, perfilData);

        res.status(201).json(affectedRows);

    } catch (error) {
        next(error);

    }
}

export default updatePerfil;

import connection from '../../db.js'

class contactoDAO {
    constructor() {
        //conexión a la bbdd
    }

    create(contacto) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO contacto (name, surname, email, mensaje) VALUES(?,?,?,?)', [contacto.name, contacto.surname, contacto.email, contacto.mensaje],
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);
                    resolve(result.insertId);

                });
        });
    }




}



export default new contactoDAO();


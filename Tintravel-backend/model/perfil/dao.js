import connection from '../../db.js'
import bcrypt from 'bcrypt';


class perfilDAO {
    constructor() {

    }

    updatePerfil(id, perfil) {
        return new Promise(async (resolve, reject) => {

            const updatePassword = (perfil.password ? `, password =?` : '');
            let values = [perfil.name, perfil.surname, perfil.username, perfil.email, perfil.paises_visitados, perfil.proximos_viajes, perfil.idiomas,
            perfil.deportes_practico, perfil.deportes_interes, perfil.frase_interes];

            if (perfil.password) {
                const saltRounds = 10;
                const passwordHash = await bcrypt.hash(perfil.password, saltRounds)
                console.log(passwordHash);

                values.push(passwordHash);
            }


            connection.query(`UPDATE usuario SET name=?, surname=?, username=?, email=?, paises_visitados=?, proximos_viajes=?, idiomas=?, deportes_practico=?, deportes_interes=?, frase_interes=? ${updatePassword} WHERE id = ${id} `,
                values,
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);

                    resolve(result.affectedRows);

                });
        });
    }
}





export default new perfilDAO();
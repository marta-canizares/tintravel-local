import connection from '../../db.js'


class UsuarioDAO {

    constructor() {

    }

    register(usuario) {
        return new Promise((resolve, reject) => {

            connection.query('INSERT INTO usuario (username,password,name,surname,email) VALUES (?,?,?,?,?)', [usuario.username, usuario.password, usuario.name, usuario.surname, usuario.email],
                function (err, result) {
                    if (err)
                        throw err;
                    console.log(err);
                    resolve(result.insertId);
                });
        });
    }


    listOne(id) {

        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM usuario WHERE id = ?', id,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    console.log(err);

                    console.log(rows);
                    resolve(rows);
                });
        });
    }


    removeOne(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM usuario WHERE id = ?', id,
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);

                    resolve(1);

                });
        });
    }



    listOneByName(username) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM usuario WHERE username =?', username,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    console.log(err);

                    console.log(rows);
                    resolve(rows);
                });
        });
    }

    updateImg(userid, img) {
        console.log(userid, img)
        return new Promise((resolve, reject) => {
            connection.query('UPDATE usuario SET foto_perfil=? WHERE id=?', [img, userid],
                function (err, rows) {
                    if (err)
                        reject(err);
                    console.log(err);

                    console.log(rows);
                    resolve(rows);
                });
        });
    }



}




export default new UsuarioDAO;

import connection from '../../db.js'
class comentarioDAO {
    constructor() {
        //conexión a la bbdd
    }

    list(postID) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT comentario.id,comentario.texto, comentario.post_id, comentario.usuario_id , usuario.username
            FROM comentario INNER JOIN usuario ON(usuario.id = comentario.usuario_id) WHERE comentario.post_id = ?`, postID,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    console.log(rows);
                    resolve(rows);
                });
        });
    }


    create(comentario) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO comentario (texto, fecha, post_id, usuario_id) VALUES (?,?,?,?)', [comentario.texto, comentario.fecha, comentario.post_id, comentario.usuario_id],
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);
                    resolve(result.insertId);

                });
        });
    }



    removeOne(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM comentario WHERE id = ?', id,
                function (err, result) {

                    if (err)
                        throw err;
                    console.log(err);

                    resolve(1);

                });
        });
    }




}



export default new comentarioDAO();


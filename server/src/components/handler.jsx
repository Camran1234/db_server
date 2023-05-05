import ruta from '../pages/Ruta'

export const handlerSql = {};

/**
 * +-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| idAdmin     | int          | NO   | PRI | NULL    | auto_increment |
| puesto      | varchar(250) | NO   |     | NULL    |                |
| descripcion | varchar(500) | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+

 * @returns 
 */
handlerSql.getAdmins = async() => {
    try {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            mode: 'cors',
        }
    
        let request = await fetch(ruta.ip+":"+ruta.puerto+"/api/getAdmins", config);
        let response = await request.json();
        if (response === undefined){
            alert("Error: servidor no disponible");
            return;
        }
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * +-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| idDesarrollador | int          | NO   | PRI | NULL    | auto_increment |
| puesto          | varchar(200) | NO   |     | NULL    |                |
| nombre          | varchar(250) | NO   |     | NULL    |                |
| carnet          | varchar(30)  | NO   |     | NULL    |                |
| curso           | varchar(100) | NO   |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+

 * @returns 
 */
handlerSql.getDesarrolladores = async() => {
    try {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            mode: 'cors',
        }
    
        let request = await fetch(ruta.ip+":"+ruta.puerto+"/api/getDesarrolladores", config);
        let response = await request.json();
        if (response === undefined){
            alert("Error: servidor no disponible");
            return;
        }
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * +----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| idMoneda | int          | NO   | PRI | NULL    | auto_increment |
| moneda   | varchar(200) | NO   |     | NULL    |                |
| valor    | int          | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+

 * @returns 
 */
handlerSql.getMonedas = async() => {
    try {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            mode: 'cors',
        }
    
        let request = await fetch(ruta.ip+":"+ruta.puerto+"/api/getMonedas", config);
        let response = await request.json();
        if (response === undefined){
            alert("Error: servidor no disponible");
            return;
        }
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


/**
 * +----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| idDepartamento | int          | NO   | PRI | NULL    | auto_increment |
| funcion        | varchar(200) | NO   |     | NULL    |                |
| descripcion    | text         | NO   |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+

 * @returns 
 */
handlerSql.getDept = async() => {
    try {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            mode: 'cors',
        }
    
        let request = await fetch(ruta.ip+":"+ruta.puerto+"/api/getDept", config);
        let response = await request.json();
        if (response === undefined){
            alert("Error: servidor no disponible");
            return;
        }
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


/**
 * +-------------+------+------+-----+---------+----------------+
| Field       | Type | Null | Key | Default | Extra          |
+-------------+------+------+-----+---------+----------------+
| idNoticia   | int  | NO   | PRI | NULL    | auto_increment |
| descripcion | text | NO   |     | NULL    |                |
+-------------+------+------+-----+---------+----------------+

 * @returns 
 */
handlerSql.getNoticias = async() => {
    try {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
                'Access-Control-Request-Method': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            mode: 'cors',
        }
    
        let request = await fetch(ruta.ip+":"+ruta.puerto+"/api/getNoticias", config);
        let response = await request.json();
        if (response === undefined){
            alert("Error: servidor no disponible");
            return;
        }
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


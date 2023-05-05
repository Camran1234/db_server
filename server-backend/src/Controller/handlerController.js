const connection = require('../Config/db');
const handlerController = {};

/* 

    admin              |
    | departamento       |
    | desarrollador      |
    | moneda             |
| noticia 
*/

handlerController.getAdmins = (req, res) => {
    let query = `SELECT * FROM admin;`
    try{
        connection.query(query, [], (error, respond) => {
            if(error){
                return res.status(500).send({
                    message: "Error: "+JSON.stringify(error)
                })
            }
            if(respond != undefined && respond != null){
                return res.status(200).send({
                    data: respond
                })
            }else{
                return res.status(505).send({
                    message: "Error: Vacio"
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            message: "Error: "+JSON.stringify(error)
        })
    }
}

handlerController.getDesarrolladores = (req, res) => {
    let query = `SELECT * FROM desarrollador;`
    try{
        connection.query(query, [], (error, respond) => {
            if(error){
                return res.status(500).send({
                    message: "Error: "+JSON.stringify(error)
                })
            }
            if(respond != undefined && respond != null){
                return res.status(200).send({
                    data: respond
                })
            }else{
                return res.status(505).send({
                    message: "Error: Vacio"
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            message: "Error: "+JSON.stringify(error)
        })
    }
}

handlerController.getMonedas = (req, res) => {
    let query = `SELECT * FROM moneda;`
    try{
        connection.query(query, [], (error, respond) => {
            if(error){
                return res.status(500).send({
                    message: "Error: "+JSON.stringify(error)
                })
            }
            if(respond != undefined && respond != null){
                return res.status(200).send({
                    data: respond
                })
            }else{
                return res.status(505).send({
                    message: "Error: Vacio"
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            message: "Error: "+JSON.stringify(error)
        })
    }
}

handlerController.getDept = (req, res) => {
    let query = `SELECT * FROM departamento;`
    try{
        connection.query(query, [], (error, respond) => {
            if(error){
                return res.status(500).send({
                    message: "Error: "+JSON.stringify(error)
                })
            }
            if(respond != undefined && respond != null){
                return res.status(200).send({
                    data: respond
                })
            }else{
                return res.status(505).send({
                    message: "Error: Vacio"
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            message: "Error: "+JSON.stringify(error)
        })
    }
}

handlerController.getNoticias = (req, res) => {
    let query = `SELECT * FROM noticia;`
    try{
        connection.query(query, [], (error, respond) => {
            if(error){
                return res.status(500).send({
                    message: "Error: "+JSON.stringify(error)
                })
            }
            if(respond != undefined && respond != null){
                return res.status(200).send({
                    data: respond
                })
            }else{
                return res.status(505).send({
                    message: "Error: Vacio"
                })
            }
        })
    }catch(error){
        return res.status(500).send({
            message: "Error: "+JSON.stringify(error)
        })
    }
}

module.exports = handlerController;
import { useEffect, useState } from 'react';
import NavBar  from '../components/NavBar';
import { handlerSql } from '../components/handler';

const Desarrollador = () => {


    const [data, setData] = useState([
        {
            puesto: "Desarrollador",
            nombre: "Usuario",
            carnet: "123123",
            curso: "Redes2"
        }
    ])

    useEffect(() => {
        handlerSql.getDesarrolladores()
            .then(result => {
                if(result != undefined && result != null){
                    setData(result);
                    console.log("Arreglo "+JSON.stringify(result))
                }
            })
            .catch(error => {
                console.error(JSON.stringify(error))
            })
    }, [])

    const showData = data.map((element) => {
        return (
            <>
                <div className='cardMenu-item'>
                    <h1>{element.puesto}</h1>
                    <h2>{element.nombre}</h2>
                    <h3>{element.carnet}</h3>
                    <h3>{element.curso}</h3>
                </div>
            </>
        )
    })

    return(
        
        <div className='div-center'>
            <NavBar />
            <h1>Desarrollador</h1>
            <div className='cardMenu-container horizontal'>
                {showData}
            </div>
            
        </div>
    )
}

export default Desarrollador;
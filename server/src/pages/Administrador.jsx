import { useEffect, useState } from 'react';
import NavBar  from '../components/NavBar';
import { handlerSql } from '../components/handler';

const Administrador = () => {

    const [data, setData] = useState([
        {
            puesto: 'Presidente',
            descripcion: 'ASDASDSD'
        },
        {
            puesto: 'Presidente',
            descripcion: 'ASDASDSD'
        }
    ])

    useEffect(() => {
        handlerSql.getAdmins()
            .then(result => {
                console.log("Arreglo "+JSON.stringify(result))
                if(result != undefined && result != null){
                    setData(result);
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
                    <h2>{element.puesto}</h2>
                    <h5>{element.descripcion}</h5>
                </div>
            </>
        )
    })

    return(
        
        <div className='div-center'>
            <NavBar />
            <h1>Administrador</h1>
            <div className='cardMenu-container horizontal'>
                {showData}
            </div>
            
        </div>
    )

}

export default Administrador;
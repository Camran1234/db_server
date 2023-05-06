import { useEffect, useState } from 'react';
import NavBar  from '../components/NavBar';
import { handlerSql } from '../components/handler';

const Moneda = () => {


    const [data, setData] = useState([
        {
            moneda: "Dolar",
            valor: 5
        }
    ])

    useEffect(() => {
        handlerSql.getMonedas()
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
                    <h1>{element.moneda}</h1>
                    <h2>{element.valor}</h2>
                </div>
            </>
        )
    })

    return(
        
        <div className='div-center'>
            <NavBar />
            <h1>Moneda</h1>
            <div className='cardMenu-container horizontal'>
                {showData}
            </div>
            
        </div>
    )

}

export default Moneda;
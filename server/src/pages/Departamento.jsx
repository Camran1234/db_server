import { useEffect, useState } from 'react';
import NavBar  from '../components/NavBar';
import { handlerSql } from '../components/handler';

const Departamento = () => {


    const [data, setData] = useState([
        {
            funcion: "ASD",
            descripcion: "Lorem ipsum"
        }
    ])

    const [noticia, setNoticia] = useState([
        {
            descripcion:"ASDASD"
        }
    ])

    useEffect(() => {
      handlerSql.getDept()
            .then(result => {
                if(result != undefined && result != null){
                    setData(result);
                    console.log("Arreglo "+JSON.stringify(result))
                }
            })
            .catch(error => {
                console.error(JSON.stringify(error))
            })

        handlerSql.getNoticias()
            .then(result => {
                if(result != undefined && result != null){
                    setNoticia(result);
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
                    <h2>{element.funcion}</h2>
                    <h5>{element.descripcion}</h5>
                </div>
            </>
        )
    })

    const showNoticia = noticia.map((element) => {
        return(
            <>
                <div className='cardMenu-container horizontal'>
                    <h1>NOTICIA: </h1>
                    <h3>{element.descripcion}</h3>
                </div>
            </>
        )
    } )

    return(
        
        <div className='div-center'>
            <NavBar />
            <h1>Departamento</h1>
            <div className='cardMenu-container horizontal'>
                {showData}
            </div>
            {showNoticia}
        </div>
    )

}

export default Departamento;
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';

export default function ItemDetailContainer() {
   
    const {idi} = useParams();
    console.log(idi)

    const [loading, setLoading] = useState();
    const [error, setError] = useState()
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResultado();

        setTimeout(() => {
            fetch('https://run.mocky.io/v3/d6b9de55-a372-4ac6-a25b-aa27f6545309')
            .then(res => res.json())
            .then(res =>{
                  setResultado(res)
                  setResultado(res.find(item => item.id === idi))
                  console.log(resultado)
                  console.log(res)
                })
            .catch((error) => {
                  console.log(error)
                  setError(true)
                })
            .finally(() => setLoading(false))
          }, 2000);


    }, [idi]);
 



    return <>
        <div>{loading && <Loading/>}</div>
        <div>{error && 'Hubo un error en el servidor'}</div>
        <div>{loading || <ItemDetail resultado={resultado}/>}</div>
    </>
}


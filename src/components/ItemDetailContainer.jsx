import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';

export default function ItemDetailContainer() {
   
    const {idi} = useParams()

    const [loading, setLoading] = useState();
    const [error, setError] = useState()
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResultado();

        setTimeout(() => {
            fetch('https://run.mocky.io/v3/957ef1c0-aea8-4446-8b41-37262630e46a')
            .then(res => res.json())
            .then(res =>{
                  setResultado(res)
                  setResultado(res.find(item => item.id === idi))
                })
            .catch((error) => {
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


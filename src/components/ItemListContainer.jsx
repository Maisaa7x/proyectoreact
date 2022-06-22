import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import './ItemListContainer.css';
import Loading from "./Loading";


function ItemListContainer() {
  const { urlid } = useParams();
  
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResultado([]);

    setTimeout(() => {
      fetch('./productos.json')
        .then(res => res.json())
        .then(res => {
          setResultado(res)
          console.log(res)
        })
        .catch((error) => {
          setError(true)
        })
        .finally(() => setLoading(false))
    }, 2000);

    console.log(resultado)
    setResultado(!urlid ? resultado : (resultado.filter(item => item.tipo == urlid)));
   
  }, [urlid]);

  


    return <>
    <p className="parrafo">{`Bienvenido a Daos Collection. Gracias por visitarnos!`}</p>
    <p className="parrafo">{`Nuestros productos`}</p>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error en el servidor'}</div> 
    <div>{loading || <ItemList resultado={resultado} />}</div> 
    </>
  }
  
  export default ItemListContainer;
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';


function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [resultado, setResultado] = useState([]);

    useEffect(() => {
      setLoading(true);
      setError(false);
      setResultado([]);

      const llamadoProduct = new Promise ((res, rej)=>{
        setTimeout(() => {
          res([
          {id:1,title:'Buzo Negro',description:'Buzo De Algodon Con Friza Interior', price:2200, pictureUrl:'./assets/img/inviernouno.jpg'},
          {id:2,title:'Buzo Gris',description:'Buzo Polar De Alta Calidad', price:2460, pictureUrl:'./assets/img/inviernodos.jpg'},
          {id:3,title:'Buzo Rojo',description:'Campera Jogger Roja, Ideal Para Entrenar', price:2500, pictureUrl:'./assets/img/inviernotres.jpg'},
          {id:4,title:'Buzo Negro',description:'Campera Jogger Negra, Ideal Para Entrenar', price:2900, pictureUrl:'./assets/img/inviernocuatro.jpg'}])
        }, 2000);

      });

      llamadoProduct
        .then((res)=>{
          console.log(res)
          setResultado(res)
         })
        .catch((error)=>{
          console.log(error)
          setError(true)
         })
        .finally(()=>{
          setLoading(false)
        })
    }, []);
    


    return <>
    <h1 className="parrafo">{`Hola ${greeting}, gracias por visitar DAOS COLLECTION!`}</h1>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error en el servidor'}</div>
    <ItemList resultado={resultado}/>
    </>
  }
  
  export default ItemListContainer;
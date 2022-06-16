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
      const getItem = new Promise ((res, rej)=>{
        setTimeout(() => {
          res([
          {id:1,title:'Campera Amarilla',description:'Campera de Friza, muy comoda para entrenar', price:1500, pictureUrl:'./assets/img/inviernocinco.jpg'},
          {id:2,title:'Campera Amarilla',description:'Campera de Friza, muy comoda para entrenar', price:1500, pictureUrl:'./assets/img/inviernocinco.jpg'},
          {id:3,title:'Campera Amarilla',description:'Campera de Friza, muy comoda para entrenar', price:1500, pictureUrl:'./assets/img/inviernocinco.jpg'},
          {id:4,title:'Campera Amarilla',description:'Campera de Friza, muy comoda para entrenar', price:1500, pictureUrl:'./assets/img/inviernocinco.jpg'}])
        }, 2000);
      });

       getItem
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
    <p className="parrafo">{`Bienvenido a ${greeting} Gracias por visitarnos!`}</p>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error en el servidor'}</div> 
    <ItemList className="contenedor" resultado={resultado}/> 
    </>
  }
  
  export default ItemListContainer;
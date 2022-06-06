import React, { useState } from 'react'

const ItemCount = ({ inicial, max, onAdd }) => {
    
    const [count, setCount] = useState(inicial)
    
  const sumar = () => {
    if(count < max){
    setCount(count + 1)
    }else{
      alert ('no podes agregar mas productos crack, no tengo stock')}
    }

  const restar = () => {
    if(count > inicial) {
    setCount(count - 1)
    }else{
        alert ('no hay stock')
    }
    }

    const reset = () =>{
        setCount(inicial)
    }


    return (
    <div>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick= {() => onAdd(count)}>Agregar al carro</button>
        <button onClick= {reset}>Reset</button>
    </div>
  )
}

export default ItemCount
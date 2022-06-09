import { sizeHeight, sizeWidth } from '@mui/system';
import React from 'react'
import Item from './Item';


function ItemList({resultado}) {
console.log(resultado)
  return (
    <div style={{ display: 'flex', margin: '20px', sizeHeight: '400', sizeWidth:'600' }}>
        {resultado?.map(resultado => <Item key={resultado.id} resultado={resultado}/>)}
    </div>
  )
}

export default ItemList;
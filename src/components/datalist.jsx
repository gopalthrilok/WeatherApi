import React from 'react'
import Dataitem from './dataitem'

const Datalist = ({items}) => {
  return (
    
      <ul className="">
        {items.map((item,i)=>(
            <Dataitem key={i} {...item}/>
        ))}
      </ul>
  
  )
}

export default Datalist

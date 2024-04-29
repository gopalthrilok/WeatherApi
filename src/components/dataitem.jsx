import React from 'react'

const Dataitem = ({src,primary,secondary}) => {
  return (
    <li className="list-group-item bg-transparent">
        <img src={src} alt="" width='20px' height='30px'className=' mt-2' id='g1 ' />
        <span className='ms-5 fw-bold'>{primary}</span>
        {secondary && <span>/</span>}
        {secondary && <span>{secondary}</span>}

    </li>
  )
}

export default Dataitem

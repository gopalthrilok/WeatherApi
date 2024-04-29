import React from 'react'
import Search from './search'

const Header = ({onValue}) => {
    console.log(onValue)
  return (
    <div className='container-fluid text-center py-3' id='g1'>
        <div className="row">
            <div className="col col-sm-12 col-md-3 col-1g-3"></div>
            <div className="col col-sm-12 col-md-6 col-1g-6 ml-3 "><Search onValue={onValue}/></div>
            <div className="col col col-sm-12 col-md-3 col-1g-3"></div>
        </div>
    </div>
  )
}

export default Header

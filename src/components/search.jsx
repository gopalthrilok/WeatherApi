import React from 'react'
import { useState } from 'react'

const Search = ({onValue}) => {
    
    const [search ,setSearch]=useState('')

    const handelChange=(e)=>{
        setSearch(e.target.value)
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        // console.log(search)
        setSearch('')
        onValue(search)
    }
  return (
    <form onSubmit={handelSubmit} className='row'>
      <div className='col-md-9'>
      <input type="text"
       className="form-control"
        placeholder="Enter Your City Name" 
        aria-label="First name" 
        value={search}
         onChange={handelChange}/>
      </div>
      <div className='col-md-3 '>  
      <button type="submit" className="btn btn-primary mr-1" style={{marginLeft:'100px'}}>Search</button>
      </div> 
    </form>
  )
}

export default Search

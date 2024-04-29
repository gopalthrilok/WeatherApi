import React, { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import './App.css'

const App = () => {
  const [value,setValue]=useState()
  console.log(value)

  const handelValue=(e)=>{
    setValue(e)

  }
  return (
    <div id='id1'> 
      <Header onValue={handelValue}/>
      <Main data={value}/>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import useWeather from '../hooks/useWeather'
import Weathercomp from './weathercomp'
import useForecast from '../hooks/useFOrecast'
import Forecastlist from './forecastlist'

const Main = ({data}) => {
  const {weatherloading,weathererror,weatherdata}=useWeather({data})
  const {forecastloading,forecasterror,forecastdata}=useForecast({data})
  console.log(forecastdata)

  if(!data){
    return(
      <section style={{height:'84vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize '>plz enter a city in search bar</p>
      </section>
    )
  }

  if(weatherloading && forecastloading){
    return(
      <section style={{height:'84vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize '>loading</p>
      </section>
    )
  }

  if(weathererror && forecasterror){
    return(
      <section style={{height:'84vh'}} className='container text-center py-3'>
        <p className='text-primary fw-bold text-capitalize '>city not found</p>
      </section>
    )
  }




  return (
    <div style={{height:'95vh'}}>
    <section >
      {!weatherloading && !weathererror && (
        <Weathercomp weatherdata={weatherdata}/>
      )}
     </section>
    <h1 className='text-center fw-bold  my-5'>DAY TO DAY FORECAST 🌤️</h1>
    <section className=' conatiner-fluid mx-3 d-flex flex-wrap'>
    {!forecastloading && !forecasterror && (
        <Forecastlist forecastdata={forecastdata}/>
      )}
    </section>
    {/* </section> */}
    </div>
  )
}

export default Main
// import React from 'react'
// import useWeather from '../hooks/useWeather'
// import Weathercomp from './weathercomp'
// import useForcast from '../hooks/useFOrecast'
// import Forecastlist from './forecastlist'

// const Main = ({data}) => {
//   //passing the city value to custom data to fecth the data
//   const{weatherloading,weathererror,weatherdata}=useWeather({data})
//   const {forecastloading,forecasterror,forecastdata}=useForcast({data})
//   console.log(forecastdata)
//   if(!data){
//     return(
//       <section style={{height:'70vh'}} className='container text-center py-3'>
//         <p className='text-primary fw-bold text-capitalize bg-warning p-3 w-50 max-auto'>plz enter the cityname</p>

//       </section>
//     )
//   }
//   if(weatherloading && forecastloading){
//     return(
//       <section style={{height:'70vh'}} className='container text-center py-3'>
//         <p className='text-primary fw-bold text-capitalize bg-secondary p-3 w-50 max-auto'>loading...</p>

//       </section>
//     )
//   }
//   if(weathererror && forecasterror){
//     return(
//       <section style={{height:'70vh'}} className='container text-center py-3'>
//         <p className='text-primary fw-bold text-capitalize bg-danger p-3 w-50 max-auto'>city not founded</p>

//       </section>
//     )
//   }
 
  




//   return (
    
//     <div style={{height:'100vh'}}>
//     <section >
//       {!weatherloading && !weathererror && (
//          <Weathercomp weatherdata={weatherdata}/>
        
//       )}
//        <h1 className='text-center fw-bold my-5'>DAY TO DAY Forecast⛅</h1>
//        <section className=' conatiner-fluid  d-flex flex-wrap'>
//         {!forecastloading && !forecasterror && (
//          <Forecastlist forcastdata={forecastdata}/>
        
//       )}
//        </section>
//        </section>
     
    
//     </div>
//   )
 
// }

// export default Main
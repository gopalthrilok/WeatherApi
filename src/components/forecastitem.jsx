import React from 'react'
import Datalist from './datalist'

const Forecastitem = ({ forecastdata }) => {
  console.log(forecastdata)
  const {
    dt,
    temp,
    humidity,
    speed,
    weather: { icon, description }

  } = forecastdata
  //writing the day format
  const day = new Date(dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })

  const items = [
    {
      src: 'https://lordicon.com/icons/wired/lineal/819-hot-temperature.gif',
      primary: `${temp.min.toFixed()}°`, // alt+0176 for degree symbol
      secondary: `${temp.max.toFixed()}°`
    },
    {
      // src:'https://media.tenor.com/geYsa2-EaqcAAAAM/humidity-rain.gif',
      src: 'https://c8.alamy.com/comp/RD1H24/humidity-vector-icon-for-personal-and-commercial-use-RD1H24.jpg',
      // src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1eN6FMDaT5iVCVJj13eSJsa07_WJ6S-EHVF5DaRlOQ&s',
      primary: `${humidity}%`,
    },
    {
      // src:'https://media.tenor.com/DAFlmuvQi4kAAAAM/wind-windy.gif',
      src: 'https://cdn.dribbble.com/users/1405895/screenshots/3552152/nature_icon_windy_animated_blue.gif',

      primary: `${speed.toFixed()}m/s`,
    }
  ]

  return (
    // <span className='text-center my-3 p-3 fw-bold'>Weather at  is</span>


      <div className="row ">
        {/* <div className="col-sm-6 mb-3 mb-sm-0 shadow" > */}
        <div >

          <div className="card mx-2 my-3 "  style={{width:'200px'}} id='g1'>
            <div className="card-body">
              <h5 className="card-title text-center">{day}</h5>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
              <p className='fw-bold'>{description}</p>
              <div>
              <Datalist items={items}/>
              </div>
            </div>
          </div>
        </div>

      </div>


  )
}

export default Forecastitem

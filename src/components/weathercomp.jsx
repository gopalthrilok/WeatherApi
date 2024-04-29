import {useState,useEffect} from 'react'
// import Dataitem from './dataitem'
import Datalist from './datalist'

const Weathercomp = ({weatherdata}) => {
    const[currentdatetime,setCurrentdatetime]=useState(new Date())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentdatetime(new Date())
        },1000);
        return ()=>clearInterval(interval)
    },[])

    const{
        name:data,
        sys:{country},
        weather:[{description,icon}],
        wind:{speed},
        main:{humidity,temp}
    }=weatherdata

    //flag
    const flag=`fi fi-${country.toLowerCase()} mx-3 rounded fs-1`

    const items=[
        {
            src:'https://lordicon.com/icons/wired/lineal/819-hot-temperature.gif',
            primary:`${temp.toFixed()}°`, // alt+0176 for degree symbol
        },
        {
            src:'https://c8.alamy.com/comp/RD1H24/humidity-vector-icon-for-personal-and-commercial-use-RD1H24.jpg',
            primary:`${humidity}%`, 
            
        },
        {
            // src:'https://media.tenor.com/DAFlmuvQi4kAAAAM/wind-windy.gif',
            src:'https://cdn.dribbble.com/users/1405895/screenshots/3552152/nature_icon_windy_animated_blue.gif',
            primary:`${speed.toFixed()}m/s`, 
        }
    ]


  return (
    <section className='container mt-3 rounded-2' id='g1'>
        <div className='row'>
             <span className='text-center my-3 p-3 fw-bold'>Weather at <span style={{color:'blue'}}>{currentdatetime.toLocaleString()}</span> is</span>
        </div>
        <div className='row'>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <p className='fw-bold'>{description}</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-auto">
                <span className={flag}></span>
                <span className='fw-bold'>{data}</span>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-auto" style={{marginTop:"10px"}}>
                <Datalist items={items}/>
            </div>
        </div>

    </section>
  )
}

export default Weathercomp

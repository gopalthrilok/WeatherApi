//importing the required hooks
import { useState, useEffect } from "react";
import axios from 'axios';

//creating the custom hooks for fetching the weatherapi data
export default function useWeather({ data }) {
    console.log(data)
    const [weatherloading, setWeatherLoading] = useState(true)
    const [weathererror, setWeathererror] = useState(null)
    const [weatherdata, setWeatherdata] = useState(null)

    //api infromation
    const apiKey = '0fd8149c85d5094a7428f632268dd3d1'
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

    useEffect(() => { //mounting
        const fetchdata = async () => {
            try {
                setWeatherLoading(true) //intial loading at time of fetching
                setWeathererror(null)   //intially no error
                const response = await axios.get(apiUrl, {
                    params: {
                        q: data,
                        appid: apiKey
                    }
                });
                console.log(response)
                setWeatherdata(response.data) //passing the data from the result obtained
                // setWeathererror(null)
                // setWeatherLoading(false)
                // console.log(response);
            } catch (error) {
                console.error(error);
                setWeathererror(error) //passing the error if obtained
            } finally {
                setWeatherLoading(false) //stopping the loading once the data iis fetched
            }
        }

        //calling the function
        fetchdata()
        return () => { }  //unmounting - cleaning

    }, [data]) //updation phase
    return { weatherdata, weatherloading, weathererror }


}
//importing the required hooks
import { useState, useEffect } from "react";
import axios from 'axios';

//creating the custom hooks for fetching the weatherapi data
export default function useForecast({ data }) {
    console.log(data)
    const [forecastloading, setForecastLoading] = useState(true)
    const [forecastrerror, setForecasterror] = useState(null)
    const [forecastdata, setForecastdata] = useState(null)

    //api infromation
    const apikey='bd5e378503939ddaee76f12ad7a97608'
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?'

    useEffect(() => { //mounting
        const fetchdata = async () => {
            try {
                setForecastLoading(true) //intial loading at time of fetching
                setForecasterror(null)   //intially no error
                const response = await axios.get(apiUrl, {
                    params: {
                        q: data,
                        appid: apikey,
                        units:'metric'
                    }
                });
                console.log(response)
                setForecastdata(response.data) //passing the data from the result obtained
                setWeathererror(null)
                setWeatherLoading(false)
                console.log(response);
            } catch (error) {
                // console.error(error);
                setForecasterror(error) //passing the error if obtained
            } finally {
                setForecastLoading(false) //stopping the loading once the data iis fetched
            }
        }

        //calling the function
        fetchdata()
        return () => { }  //unmounting - cleaning

    }, [data]) //updation phase
    return { forecastdata, forecastloading, forecastrerror }


}
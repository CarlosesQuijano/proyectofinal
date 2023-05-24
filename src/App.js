import React, { useEffect, useState, useCallback } from 'react';
import Dashboard from './componenets/Dashbaord/Dashboard' ;
import Hightlights from './componenets/Hightlights/Hightlights';
import NextDays from './componenets/NextDays/NextDays';
import axios from 'axios';




function DataApp() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [currentWeather  , setCurrentWeather] = useState({})
  const  [nextdays  , setNextdays] = useState([])
  const [city ,  setCity] = useState('10001')
  const [temperaturefromat , setTumperature] = useState('c') 

  const getCurrentWeather = useCallback(async (city) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=' + API_KEY + '&q=' + city;

    try {
      const response = await axios.get(url);
      const data = response.data;
      setCurrentWeather(data);
    } catch {
      console.log('There is a problem fetching data');
    }
  }, [API_KEY]);

  const futureWeather = useCallback(async () => {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=' + API_KEY + '&q=' + city + '&days=3&aqi=no&alerts=no';

    try {
      const response = await axios.get(url);
      const data = response.data;
      setNextdays(data.forecast.forecastday);
    } catch {
      console.log('There is a problem with the API');
    }
  }, [API_KEY, city]);

    useEffect(() => {
      getCurrentWeather(city);
      futureWeather();
    }, [city, getCurrentWeather, futureWeather]);
return (
    <div className="App w-[90%] rounded-[45px]  mx-auto  bg-[#212A3E] ">
      <div className='flex  flex-col lg:flex-row max-h-full '>
        <Dashboard currentWeather = {currentWeather} setCity={setCity} temperaturefromat = {temperaturefromat} setTumperature  = {setTumperature}/>
        <div className='flex flex-col min-w-[70%] max-h-full bg-[#F1F6F9] rounded-[50px]'>
          <NextDays nextdays = {nextdays} temperaturefromat = {temperaturefromat} />
          <Hightlights currentWeather = {currentWeather}  />
        </div>
      </div>
    </div>
  );
}

export default DataApp;
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";


export default function Weather() {
  
  const API_KEY = '9a60fb748b806a6abe40b435a2b51a98';
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="Weather App">
      {(typeof data.main != 'undefined') ? (
        <WeatherCard weatherData={data}/>
      ): (
        <div><p>Data Failed Too Load</p></div>
      )}
      
    </div>
  );
}
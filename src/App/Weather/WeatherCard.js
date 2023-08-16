import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import './weather.css'

const WeatherCard = ({weatherData}) => (
  <Card className='card'>
    <Card.Content >
    <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
    <div className='body'>
        <p >Temprature: <br />{weatherData.main.temp} &deg;C</p>
        <p>Sunrise: <br />{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: <br />{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: <br />{weatherData.weather[0].main}</p>
        <p>Humidity: <br />{weatherData.main.humidity} %</p>
        <p>Day: <br />{moment().format('dddd')}</p>
        <p>Date: <br />{moment().format('LL')}</p>
      </div>
    </Card.Content>
  </Card>
)

export default WeatherCard;
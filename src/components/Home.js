import React, { Component } from 'react';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

const Home = ({ pinnedCities }) => {
  return (
    <div>
      <section id="dashboard">
        <h1 >
          Home
        </h1>
        <ul>
        {pinnedCities.map((city) => {
            // let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city.zip},us&units=imperial&appid=8c5526a715e37b824b2faf2c370a6888`)
            //   .then((res) => res.json())
            //   .then((weather) => <li className="weather-card" key={weather.id}>{weather.main.temp}</li>)
            // console.log(weather)
            return (<li className="weather-card" key={city.zip}>{city.city}</li>)
          })}
        </ul>
        <Link to="/pinned-cities"><article className="add-city-card">+ Pin another city</article></Link>
      </section>
    </div>
  )
}

export default Home

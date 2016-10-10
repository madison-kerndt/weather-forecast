import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

const Header = ({ currentCity, getWeatherAPI }) => {
  return (
    <header>
      <Link to="/" className="nav-title"><h1>Weather Tracker</h1></Link>
      <nav>
        <article className="nav-current-forcast">
          <button onClick={getWeatherAPI}></button>
          <p>The current forecast for {currentCity && currentCity.name}:
            {currentCity && currentCity.weather.description }
            {currentCity && Math.round(currentCity.main.temp) }
          </p>
        </article>
        <Link className="link-extended-city-forcast" to="/extended-forecast"><nav>Extended Forecast »</nav></Link>
      </nav>
    </header>
  )
}

export default Header;

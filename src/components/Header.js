import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

// import geolocation from 'geolocation';
// import navigator from 'request';


const Header = ({ currentCity, getWeatherAPI }) => {

  return (
    <header>
      <Link to="/" className="nav-title"><h1>Weather Tracker</h1></Link>
      <nav>
        <article className="nav-current-forcast">
          <button onClick={getWeatherAPI}></button>
          <p>{currentCity}</p>
        </article>
        <Link className="link-extended-city-forcast" to="/extended-forecast"><nav>Extended Forecast »</nav></Link>
      </nav>
    </header>
  )
}

export default Header;

import React, { Component } from 'react';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

export default class Home extends Component {
  constructor({ pinnedCities }) {
    super();
    this.state = {
      weather: []
    };
  }

  getWeather(zipCode) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=8c5526a715e37b824b2faf2c370a6888`)
    .then((res) => res.json())
    .then((weather) => this.setState({ 'weather' : this.state.weather.concat(weather)}));
  }

  componentDidMount() {
    this.props.pinnedCities.map((pinnedCity) => this.getWeather(pinnedCity.zip));
  }

  render() {
    return (
        <section id="dashboard">
          <h1 >
            Home
          </h1>
          <ul>
          {this.state.weather.length && this.state.weather.map((city) => {
           return (<li className="weather-card" key={city.id}>{city.name}: {city.main.temp}
           <Link className="link-extended-city-forecast" to={`/extended-forecast/${city.id}`}>Extended Forecast »</Link>
           </li>)
          })}
          </ul>
          <Link to="/pinned-cities"><article className="add-city-card">+ Edit Pinned Cities</article></Link>
        </section>
    )
  }
}

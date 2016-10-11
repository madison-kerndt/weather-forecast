import React, { Component } from 'react';
import { connect } from 'react-redux';

const ExtendedForecast = ({ getCurrentCity, currentCity, extendedForecast  }) => {
  return (
    <section id="forcast">
      <article className="extended-weather-card"
        onClick={() => getCurrentCity()}
      >
        <h1>{currentCity}</h1>
        <ul>
          {extendedForecast && extendedForecast.list.map((hour) => <li>{hour.dt_txt}: <h3>{Math.round(hour.main.temp)}</h3></li>)}
        </ul>
      </article>
    </section>
  )
}

export default ExtendedForecast;

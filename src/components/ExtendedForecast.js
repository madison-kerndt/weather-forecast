import React, { Component } from 'react';
import { connect } from 'react-redux';

const ExtendedForecast = ({ getCurrentCity , extendedForecast  }) => {
  return (
    <section id="forecast">
      <article className="extended-weather-card"
        onClick={() => getCurrentCity()}>
        <ul>
          {extendedForecast && extendedForecast.list.map((hour) => <li>{hour.dt_txt}: <h3>{Math.round(hour.main.temp)}</h3></li>)}
        </ul>
      </article>
    </section>
  )
}

export default ExtendedForecast;

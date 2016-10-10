import React, { Component } from 'react';
import { connect } from 'react-redux';

const ExtendedForecast = ({ onLoadPotato, currentCity }) => {
  return (
    <section id="forcast">
      <article className="extended-weather-card"
        onClick={() => console.log(currentCity)}
      >
        <h1>{currentCity}</h1>
        <ul>
          <li>
            <h2>Day 1</h2>
            <h3>Hour 1</h3>
            <h3>Hour 2</h3>
            <h3>Hour 3</h3>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default ExtendedForecast;

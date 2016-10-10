import React, { Component } from 'react';
import { connect } from 'react-redux';

const ExtendedForecast = ({ onLoadPotato }) => {
  return (
    <section id="forcast">
      <article className="extended-weather-card"
        onClick={() => onLoadPotato()}
      >
        <h1>Current weather 4</h1>
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

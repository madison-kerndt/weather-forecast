import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';

export default class Home extends Component {

  render() {
    return (
      <div>
        <section id="dashboard">
          <h1>Home</h1>
          <article className="weather-card">Current weather1</article>
          <article className="weather-card">Current weather2</article>
          <article className="weather-card">Current weather3</article>
          <article className="weather-card">Current weather4</article>
          <article className="weather-card">Current weather5</article>
          <Link to="/pinned-cities"><article className="add-city-card">+ Pin another city</article></Link>
        </section>
      </div>
    )
  }
}

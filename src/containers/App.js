import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';


export default class App extends Component {

  handleLocation() {
    const geolocation = require('geolocation');
    const geo = navigator.geolocation;
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(function(position) {

      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <section>
        <header>
          <Link to="/" className="nav-title"><h1>Weather Tracker</h1></Link>
          <nav>
            <article className="nav-current-forcast">
              <p>Current forcast paceholder text for Denver blue skies</p>
            </article>
            <Link className="link-extended-city-forcast" to="/extended-forecast"><nav>Extended Forecast »</nav></Link>
          </nav>
          <button onClick={() => this.handleLocation()}>Return Location</button>
        </header>
        <div>{this.props.children}</div>
      </section>
    )
  }
}

// const mapStateToProps = state => {
//   // return an object of redux store data
//   // that you'd like available in your component
//   return {};
// }
//
// export default connect(mapStateToProps)(App);

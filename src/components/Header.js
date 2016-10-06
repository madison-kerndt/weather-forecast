import React from 'react';
// import { connect } from 'react-redux';
// import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';


// export default class Header extends Component {

  // handleLocation() {
  //   const geolocation = require('geolocation');
  //   const geo = navigator.geolocation;
  //   let lat;
  //   let lon;
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //
  //     console.log(position.coords.latitude, position.coords.longitude);
  //   });
  // }

//   render() {
//     return (
//       <header>
//         <Link to="/" className="nav-title"><h1>Weather Tracker</h1></Link>
//         <nav>
//           <article className="nav-current-forcast">
//             <p>Current forcast placeholder text for Denver blue skies</p>
//           </article>
//           <Link className="link-extended-city-forcast" to="/extended-forecast"><nav>Extended Forecast »</nav></Link>
//         </nav>
//         <button onClick={() => this.handleLocation()}>Return Location</button>
//       </header>
//     )
//   }
// }

const Header = ({ handleDisplayWeather }) => (
  <header>
    <Link to="/" className="nav-title"><h1>Weather Tracker</h1></Link>
    <nav>
      <article className="nav-current-forcast">
        <p>Current forcast placeholder text for Denver blue skies</p>
      </article>
      <Link className="link-extended-city-forcast" to="/extended-forecast"><nav>Extended Forecast »</nav></Link>
    </nav>
    <button onClick={() => handleDisplayWeather('string')}>Return Location</button>
  </header>
)

export default Header

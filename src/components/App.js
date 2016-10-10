import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Router, IndexRoute, Route, browserHistory } from 'react-router';
import Header from './Header';
import tomato from '../actions/index.js';


export default class App extends Component {

  render() {
    return (
      <section>
        <Header />
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

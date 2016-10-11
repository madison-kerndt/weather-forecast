import React, { Component } from 'react';

const PinnedCities = ({ pinnedCities , pinNewCity }) => {
let input;
  return (
    <div>
      <h1>Pinned Cities:</h1>
      <ul>
        {pinnedCities && pinnedCities.map((city) => <li key={city.zip}>{city.city}</li>)}
      </ul>
      <form
        className="add-city-container"
        onSubmit={ (e) => {
          e.preventDefault();
          pinNewCity(input.value);
          input.value=('');
        }}
      >
        <input
          ref={ node => { input = node }}
          type="number"
          className="add-zip-field"
          placeholder="Zip Code" />
        <button disabled={pinnedCities.length >= 3 ? true : false}
          className="add-city-button">
          Pin New City
        </button>
      </form>
    </div>
  )
}

export default PinnedCities

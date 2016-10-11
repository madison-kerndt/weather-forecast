import React, { Component } from 'react';

const PinnedCities = ({ pinnedCities , pinNewCity }) => {

  return (
    <div>
      <h1>Pinned Cities:</h1>
      <ul>
        {pinnedCities && pinnedCities.map((city) => <li key={city.zip}>{city.city}</li>)}
      </ul>
      <form className='InputCityArea' onSubmit={ (e) => {
              e.preventDefault()
              pinNewCity(input.value)
          }}>
            <input placeholder='Zip Code' className='InputPinCityZip' ref={ node  => {input = node}}/>
            <button children='Pin New City' className='SubmitNewCity'/>
          </form>
    </div>
  )
}

export default PinnedCities









// ref={ node  => {input = node}}

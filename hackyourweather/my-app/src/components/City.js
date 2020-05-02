import React from 'react'
import CityName from './CityName'
import WeatherInfo from './WeatherInfo'
import Details from './Details'
import '../App.css'
import CloseButton from './CloseButton'
import { Link } from 'react-router-dom'

function City ({
  name,
  weatherKind,
  weatherDescription,
  minTemp,
  maxTemp,
  lat,
  lon,
  handleClose,
  country,
  id
}) {
  return (
    <div className='cityCard'>
      <CloseButton id={id} handleClose={handleClose} />
      <Link to={{ pathname: `/${id}`, cityName:{name}}}>
        <CityName name={name} country={country} />{' '}
      </Link>
      <WeatherInfo
        weatherKind={weatherKind}
        weatherDescription={weatherDescription}
      />
      <Details minTemp={minTemp} maxTemp={maxTemp} lat={lat} lon={lon} />
    </div>
  )
}

export default City

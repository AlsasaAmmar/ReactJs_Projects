import React from 'react'

function CityName ({ name, country }) {
  return (
    <h1>
      {name}, {country.country}
    </h1>
  )
}

export default CityName

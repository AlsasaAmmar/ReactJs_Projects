import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch   } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer} from 'recharts'

async function fetchData (url, setState, setError) {
  try {
    const result = await axios(url)
    setState(result.data.list)
    setError(false)
  } catch (error) {
    console.log(error)
    setError(true)
  }
}

const FiveDaysForecast = props => {
  let match = useRouteMatch()
  const cityName = props.location.cityName ? props.location.cityName.name : null

  const [data, setData] = useState([null])
  const [error, setError] = useState(false)

  useEffect(() => {
    const cityID = match.params.cityId
    const APIKEY = process.env.REACT_APP_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${APIKEY}&units=metric`
    fetchData(url, setData, setError)
  }, [match.params.cityId])

  return (
    <div className='chart-wrapper'>
      <h2>{cityName} the coming five days</h2>
      {data && (
          <div className ='chart'> 
        <ResponsiveContainer width="100%" height={300}> 
        <AreaChart
          className='chart'
          width={500}
          height={200}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          data={data}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='dt_txt' />
          <YAxis
            dataKey={temp => temp.main.temp}
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey={dataFromApi => dataFromApi.main.temp}
            stroke='#8884d8'
            fill='#8884d8'
            name="temp"
          />
        </AreaChart>
        </ResponsiveContainer>
        </div>
      )}
      {error && <p> information is not available</p>}
      <Link to='/'>Back </Link>
    </div>
  )
}

export default FiveDaysForecast

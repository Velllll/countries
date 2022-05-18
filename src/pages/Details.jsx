import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { searchByCountry } from '../links'
import Info from '../components/info'

const Details = () => {
  const {name} = useParams()
  const [country, setCountry] = useState({})

  useEffect(() => {
    axios.get(searchByCountry(name))
    .then(({data}) => setCountry(data[0]))
  }, [name])

  return (
    <>
      <Info country={country}/>
    </>
  )
}

export default Details
